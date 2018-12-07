/**
 * This api is in charge of transfering data from
 * The main function is initial_pull which gets called after google api says we have user
 */

import { database } from '../utils/firebase';
import { _pullDataFromSheet } from '../helpers/pullDataFromSheet';
import { sheet_config } from '../utils/google_config';
import { convertCSOdata, convertADMdata } from '../helpers/sheetToObjectHelper';
/**
 * @todo create a function
 * @param {*} sheet 
 */

function get_col(col_sheet){
    let cols = {}
    let data = col_sheet.values;

    if(data){
        // Get coloumns in sheet
        for(let i in  data[0]){
            const col_name = data[0][i].replace(/\.|#|\$|\/|\[|\]/g, ""); // first time doing regex on my own hihi xd
            let new_col_name = col_name;
            let counter = 0;
            while(cols[new_col_name]){
                counter++;
                new_col_name = col_name + counter;
            }
            cols[new_col_name] = true;
        }
        
        // Pass array of column names to callback so we can reuse this function for other sheets\
    }
    return cols;

}

function Generate_Reference_Keys(doc_obj, updates, ref_keys){
    // Create Reference keys based on Activity Title
    for(let i in doc_obj['DOCUMENT']){
        const activity_title = doc_obj['DOCUMENT'][i]['NORMALIZED TITLE'];
        if(activity_title){
            if(ref_keys[activity_title] != null){
                // console.log("MERON NA BOI", i, ref_keys[activity_title]);
                doc_obj['DOCUMENT'][i]['DOCUMENTID'] = ref_keys[activity_title];
            }
            else{
                // console.log("New", activity_title);
                ref_keys[activity_title] = Number(i);
                doc_obj['DOCUMENT'][i]['DOCUMENTID'] = Number(i);
            }
            doc_obj['DOCUMENT'][i]['COPYID'] = Number(i);
        }
    }
    updates['REFERENCE_KEYS'] = ref_keys;
}
function Sheet_To_Object(sheet, length){
    // FOURTH: After pulling all the remaining CSO aps, check columns and prepare updates
    console.log("SHEET", sheet);
    let sheet_obj = {}
    let data = sheet.data;

    if(data && data[1] && data[1]['values']){
        data = data[1]['values'];
        let cols = get_col(sheet.data[0]);
        let col_index = Object.keys(cols);
        
        sheet_obj['DOCUMENT'] = {}
        sheet_obj['DOCUMENT_LENGTH'] = length
        
        // Get coloumns in sheet
        for(let i in  data){
            let index = Number(i) + length;
            sheet_obj['DOCUMENT'][index] = {}
            sheet_obj['DOCUMENT_LENGTH'] += 1;
            sheet_obj['DOCUMENT'][index]['remarks'] = []
            for(let x in data[i]){
                if(col_index[x]){
                    sheet_obj['DOCUMENT'][index][col_index[x]] = data[i][x];
                }
                else{
                    sheet_obj['DOCUMENT'][index]['remarks'].push(data[i][x]);
                }
            }

            // Create Reference keys based on Activity Title
            const activity_title = sheet_obj['DOCUMENT'][index]['Activity Title'].toLowerCase().replace(/\s/g, '');
            if(activity_title){
                sheet_obj['DOCUMENT'][index]['NORMALIZED TITLE'] = activity_title;
            }
        }
        
    }
    return sheet_obj;
    
}

function retrieve_adm(updates){
    database.ref(sheet_config.csoadm+'_LENGTH').once('value').then( snapshot => {
        const length = snapshot.val() || 0;
        const begin = 2+snapshot.val();
        const ranges = ["!1:1", "!"+begin+":200000"];
        _pullDataFromSheet(sheet_config.csoadm, ranges, sheet => {
            let adm_obj = Sheet_To_Object(sheet, length);
            if(adm_obj){
                console.log("ADM OBJ", adm_obj);
                database.ref('REFERENCE_KEYS').once('value').then( refkeys => {
                    let reference_keys = refkeys.val() || {};
                    Generate_Reference_Keys(adm_obj, updates, reference_keys);
                    convertADMdata(updates,adm_obj);

                    updates[sheet_config.csoadm+'_LENGTH'] = adm_obj['DOCUMENT_LENGTH'];
                    
                    console.log(updates);
                    // database.ref().update(updates);
                });
            }
        });
    })
}

export function initial_pull(){
    // Bare with me, This part uses alot of async functions that requires callbacks since the functions
    // we need them to come right after each other and pass their data
    // Its amazing how we would have to make everything below here repeat every minute after the final promise

    let updates = {}
    // FIRST: GET LENGTH OF CSO APS ALREADY IN THE DB
    database.ref(sheet_config.csoaps+'_LENGTH').once('value').then( snapshot => {
        const length = snapshot.val() || 0;
        const begin = 2+snapshot.val();
        const ranges = ["!1:1", "!"+begin+":200000"]; // GET FIRST COLUMN AND SUCCEEDING COLUMNS
        // SECOND: TRANSFORM SHEET DATA TO OBJECTS
        _pullDataFromSheet(sheet_config.csoaps, ranges, sheet => {
            let cso_obj = Sheet_To_Object(sheet, length);
            if(cso_obj){
                console.log("CSO OBJ", cso_obj);
                // THIRD: GET THE REFERENCE KEYS FOR CROSS REFERENCING TO OTHER NODES
                database.ref('REFERENCE_KEYS').once('value').then( refkeys => {
                    let reference_keys = refkeys.val() || {};
                    Generate_Reference_Keys(cso_obj, updates, reference_keys);
                    convertCSOdata(updates,cso_obj);

                    // FINALLY: SET UPDATES TO BE SENT TO FIREBASE TO OBJECTS
                    // updates[sheet_config.csoaps] = cso_obj['DOCUMENT'];
                    updates[sheet_config.csoaps+'_LENGTH'] = cso_obj['DOCUMENT_LENGTH'];
                    retrieve_adm(updates);
                    console.log(updates);
                    // database.ref().update(updates);
                });
            }
        });
    })
    
    
}