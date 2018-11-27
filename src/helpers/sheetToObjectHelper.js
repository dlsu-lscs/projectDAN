

// let general = {
//     id: {
//         timestamps: {},
//         Title: "",
//         status: {},
//         remarks: {}
//     }
// }

// let CSO_APS = {
//     id: {
//         duration: "",
//     }
// }

// let version = {
//     id: {

//     }
// }
function update_object_property(updates, node, docid, property, realid, val){
    if(val && val !== ''){
        if( !updates[node][docid][property]){
            updates[node][docid][property] = {}
        }
        updates[node][docid][property][realid] = val;
    }
}
function sub_update_object_property(updates, node, docid, property, realid, val, i){
    if(val && val !== ''){
        if( !updates[node][docid][property]){
            updates[node][docid][property] = {}
        }
        if( updates[node][docid][property][realid] ){
            updates[node][docid][property][realid+(Number(i)*0.1)] = val;
        }
        else{
            updates[node][docid][property][realid] = val;
        }
    }
}
export function convertCSOdata(updates, cso_obj){
    updates['GENERAL'] = {}
    updates['APS'] = {}
    updates['HISTORY'] = {}
    for(let i in cso_obj['DOCUMENT']){
        if(updates['GENERAL']){
            const docid = cso_obj['DOCUMENT'][i]['DOCUMENTID'];
            const realid = cso_obj['DOCUMENT'][i]['COPYID'];
            if(!updates['GENERAL'][docid]){
                updates['GENERAL'][docid] = {}
            }
            if(!updates['APS'][docid]){
                updates['APS'][docid] = {}
            }
            if(!updates['HISTORY'][docid]){
                updates['HISTORY'][docid] = {}
            }
            updates['GENERAL'][docid]['Title'] = cso_obj['DOCUMENT'][i]['Activity Title'];
            updates['GENERAL'][docid]['Last Updated'] = cso_obj['DOCUMENT'][i]['Timestamp'];
            updates['GENERAL'][docid]['Status'] = (!cso_obj['DOCUMENT'][i]['Status'] ? 'No Status': cso_obj['DOCUMENT'][i]['Status']);
            update_object_property(updates,'HISTORY',docid,'Title',realid,cso_obj['DOCUMENT'][i]['Activity Title']);
            update_object_property(updates,'HISTORY',docid,'Timestamps',realid,cso_obj['DOCUMENT'][i]['Timestamp']);
            update_object_property(updates,'HISTORY',docid,'Status',realid,cso_obj['DOCUMENT'][i]['Status'] === ''? 'No Status': cso_obj['DOCUMENT'][i]['Status']);
            if(cso_obj['DOCUMENT'][i]['remarks']){
                for(let x in cso_obj['DOCUMENT'][i]['remarks']){
                    sub_update_object_property(updates,'GENERAL',docid,'Remarks',realid,cso_obj['DOCUMENT'][i]['remarks'][x], x);
                }
            }

            updates['APS'][docid]['Duration'] = cso_obj['DOCUMENT'][i]['Activity Date'];
            updates['APS'][docid]['Dates'] = cso_obj['DOCUMENT'][i]['Activity Dates'];
            update_object_property(updates,'HISTORY',docid,'Duration',realid,cso_obj['DOCUMENT'][i]['Activity Date']);
            update_object_property(updates,'HISTORY',docid,'Dates',realid,cso_obj['DOCUMENT'][i]['Activity Dates']);
        }
    }

}