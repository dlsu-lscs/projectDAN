
import { sheet_config } from '../utils/google_config';

/**
 * 
 * @param {*} sheet_name name of sheet in google sheets
 * @param {*} range range from sheet "" = all | "!a1:c5" = from a1 cell - c5 cell | "A1:Z" = from row 1 of a to z | "2:5" from row 2 to 5
 * @param {*} callback callback function once pulling data from sheet
 * @returns a an object where data is the value ranges and error  is the error
 */
export async function _pullDataFromSheet(sheet_name, range, callback){
    let sheet = {}
    for(let i in range){
        range[i] = sheet_name+range[i];
    }
    window.gapi.client.load("sheets", "v4", () => {
        return window.gapi.client.sheets.spreadsheets.values
        .batchGet({
            spreadsheetId: sheet_config.google_sheets_id,
            ranges: range
        })
        .then(
            response => {
                const data = response.result.valueRanges;
                sheet['data'] = data;
                callback(sheet);
            },
            response => {
                sheet['data'] = false;
                sheet['error'] = response.result.error;
                callback(sheet)
            }
        )
    })
}