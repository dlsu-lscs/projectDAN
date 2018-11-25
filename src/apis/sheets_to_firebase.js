/**
 * This api is in charge of transfering data from
 */

import { database } from '../utils/firebase';
import { _pullDataFromSheet } from '../helpers/pullDataFromSheet';

// SHEET NAMES
const config = {
    csoaps: "CSO APS"
}

/**
 * @todo create a function
 * @param {*} sheet 
 */

function get_cso_col(col_sheet){

    let cols = {}
    let data = col_sheet.data;

    if(data){
        // Get coloumns in sheet
        for(let i in  data[0]){
            const col_name = data[0][i].replace(/\.|#|$|\/|\[|\]/, "_"); // first time doing regex on my own hihi xd
            let new_col_name = col_name;
            let counter = 0;
            while(cols[new_col_name]){
                counter++;
                new_col_name = col_name + counter;
            }
            cols[new_col_name] = true;
        }

        database.ref('length').once('value').then( snapshot => {
            const length = 2+snapshot.val();
            const range = "!"+length+":200000";
            _pullDataFromSheet(config.csoaps, range, (sheet) => {
                literal_aps_to_firebase(cols, sheet);
            });
        })
    }

}
function literal_aps_to_firebase(cols, sheet){
    let col_index = Object.keys(cols);
    let data = sheet.data;
    let updates = {}
      
    updates['documents'] = {}
    updates['length'] = 0

    if(data){
        // Get coloumns in sheet
        for(let i in  data){

            updates['documents'][i] = {}
            updates['length'] += 1;
            updates['documents'][i]['remarks'] = []
            for(let x in data[i]){
                if(col_index[x]){
                    updates['documents'][i][col_index[x]] = data[i][x];
                }
                else{
                    updates['documents'][i]['remarks'].push(data[i][x]);
                }
            }
        }

        // Transform those all to objects      
        database.ref().update(updates);
    }
}

export async function initial_pull(){
    _pullDataFromSheet(config.csoaps, "!1:1", get_cso_col);
    
}