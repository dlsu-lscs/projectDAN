

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
function create_node_object(updates, title, docid){
    if(!updates[title][docid]){
        updates[title][docid] = {}
    }
}
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

function udpate_if_exist(updates, node, docid, property, val){
    if(val && val !== ''){
        updates[node][docid][property] = val;
    }
}
export function convertCSOdata(updates, cso_obj){
    updates['GENERAL'] = {}
    updates['APS'] = {}
    updates['HISTORY'] = {}
    updates['DETAILS'] = {}
    for(let i in cso_obj['DOCUMENT']){
        const cso_doc = cso_obj['DOCUMENT'][i];
        const docid = cso_doc['DOCUMENTID'];
        const realid = cso_doc['COPYID'];
        create_node_object(updates,'GENERAL',docid);
        create_node_object(updates,'APS',docid);
        create_node_object(updates,'HISTORY',docid);
        create_node_object(updates,'DETAILS',docid);

        //  GENERAL //
        updates['GENERAL'][docid]['Title'] = cso_doc['Activity Title'];
        updates['GENERAL'][docid]['Last Updated'] = cso_doc['Timestamp'];
        updates['GENERAL'][docid]['Status'] = (!cso_doc['Status'] ? 'No Status': cso_doc['Status']);
        updates['GENERAL'][docid]['Remarks'] = cso_doc['Remarks'] || "";
        update_object_property(updates,'HISTORY',docid,'Title',realid,cso_doc['Activity Title']);
        update_object_property(updates,'HISTORY',docid,'Remarks',realid,cso_doc['Remarks']);
        update_object_property(updates,'HISTORY',docid,'Timestamps',realid,cso_doc['Timestamp']);
        update_object_property(updates,'HISTORY',docid,'Status',realid,cso_doc['Status'] === ''? 'No Status': cso_doc['Status']);
        if(cso_obj['DOCUMENT'][i]['remarks']){
            for(let x in cso_obj['DOCUMENT'][i]['remarks']){
                sub_update_object_property(updates,'GENERAL',docid,'Remarks',realid,cso_doc['remarks'][x], x);
            }
        }

        //  APS //
        // updates['APS'][docid]['Duration'] = cso_doc['Activity Date'];
        udpate_if_exist(updates,'APS',docid,'Duration',cso_doc['Activity Date']);
        updates['APS'][docid]['Dates'] = cso_doc['Activity Dates'];
        udpate_if_exist(updates,'APS',docid,'Dates',cso_doc['New Activity Dates']);
        update_object_property(updates,'HISTORY',docid,'Duration',realid,cso_doc['Activity Date']);
        update_object_property(updates,'HISTORY',docid,'Dates',realid,cso_doc['Activity Dates']);

        //  DETAILS //
        udpate_if_exist(updates,'DETAILS',docid,'Term',cso_doc['Term']);
        udpate_if_exist(updates,'DETAILS',docid,'Type of Activity',cso_doc['Type of Activity']);
        udpate_if_exist(updates,'DETAILS',docid,'Nature of Activity',cso_doc['Nature of Activity']);
        udpate_if_exist(updates,'DETAILS',docid,'Activity Time',cso_doc['Activity Time']);
        udpate_if_exist(updates,'DETAILS',docid,'Activity Venue',cso_doc['Activity Venue']);
        udpate_if_exist(updates,'DETAILS',docid,'Type of SAS Submission',cso_doc['Type of SAS Submission']);
        udpate_if_exist(updates,'DETAILS',docid,'Old Activity Dates',cso_doc['Old Activity Dates']);
        udpate_if_exist(updates,'DETAILS',docid,'New Activity Dates',cso_doc['New Activity Dates']);
        udpate_if_exist(updates,'DETAILS',docid,'Old Activity Time',cso_doc['Old Activity Time']);
        udpate_if_exist(updates,'DETAILS',docid,'New Activity Time',cso_doc['New Activity Time']);
        udpate_if_exist(updates,'DETAILS',docid,'Old Activity Venue',cso_doc['Old Activity Venue']);
        udpate_if_exist(updates,'DETAILS',docid,'New Activity Venue',cso_doc['New Activity Venue']);
        udpate_if_exist(updates,'DETAILS',docid,'Submitted by',cso_doc['Submitted by:']);
        udpate_if_exist(updates,'DETAILS',docid,'Contact Number',cso_doc['Contact Number']);
        udpate_if_exist(updates,'DETAILS',docid,'Email address',cso_doc['Email address']);
        udpate_if_exist(updates,'DETAILS',docid,'Received By',cso_doc['Received By:']);
        udpate_if_exist(updates,'DETAILS',docid,'Received Date',cso_doc['Received Date']);
        udpate_if_exist(updates,'DETAILS',docid,'Stage',cso_doc['Stage']);
        udpate_if_exist(updates,'DETAILS',docid,'First Checked By',cso_doc['First Checked By:']);
        udpate_if_exist(updates,'DETAILS',docid,'Second Checked By',cso_doc['Second Checked By:']);
        udpate_if_exist(updates,'DETAILS',docid,'Date Checked',cso_doc['Date Checked']);
        udpate_if_exist(updates,'DETAILS',docid,'Filed By',cso_doc['Filed By:']);
        udpate_if_exist(updates,'DETAILS',docid,'Filed Date',cso_doc['Filed Date']);
        

        
        udpate_if_exist(updates,'DETAILS',docid,'Type of Activity',cso_doc['Type of Activity1']);
        udpate_if_exist(updates,'DETAILS',docid,'Nature of Activity',cso_doc['Nature of Activity1']);
        udpate_if_exist(updates,'DETAILS',docid,'Activity Time',cso_doc['Activity Time1']);
        udpate_if_exist(updates,'DETAILS',docid,'Activity Venue',cso_doc['Activity Venue1']);
        udpate_if_exist(updates,'DETAILS',docid,'Activity Time',cso_doc['New Activity Time']);
        update_object_property(updates,'HISTORY',docid,'Term',realid,cso_doc['Term']);
        update_object_property(updates,'HISTORY',docid,'Type of Activity',realid,cso_doc['Type of Activity']);
        update_object_property(updates,'HISTORY',docid,'Nature of Activity',realid,cso_doc['Nature of Activity']);
        update_object_property(updates,'HISTORY',docid,'Activity Time',realid,cso_doc['Activity Time']);
        update_object_property(updates,'HISTORY',docid,'Activity Venue',realid,cso_doc['Activity Venue']);
        update_object_property(updates,'HISTORY',docid,'Type of SAS Submission',realid,cso_doc['Type of SAS Submission']);
        update_object_property(updates,'HISTORY',docid,'Old Activity Dates',realid,cso_doc['Old Activity Dates']);
        update_object_property(updates,'HISTORY',docid,'New Activity Dates',realid,cso_doc['New Activity Dates']);
        update_object_property(updates,'HISTORY',docid,'Old Activity Time',realid,cso_doc['Old Activity Time']);
        update_object_property(updates,'HISTORY',docid,'New Activity Time',realid,cso_doc['New Activity Time']);
        update_object_property(updates,'HISTORY',docid,'Old Activity Venue',realid,cso_doc['Old Activity Venue']);
        update_object_property(updates,'HISTORY',docid,'New Activity Venue',realid,cso_doc['New Activity Venue']);
        update_object_property(updates,'HISTORY',docid,'Submitted by',realid,cso_doc['Submitted by:']);
        update_object_property(updates,'HISTORY',docid,'Contact Number',realid,cso_doc['Contact Number']);
        update_object_property(updates,'HISTORY',docid,'Email address',realid,cso_doc['Email address']);
        update_object_property(updates,'HISTORY',docid,'Received By',realid,cso_doc['Received By:']);
        update_object_property(updates,'HISTORY',docid,'Received Date',realid,cso_doc['Received Date']);
        update_object_property(updates,'HISTORY',docid,'Stage',realid,cso_doc['Stage']);
        update_object_property(updates,'HISTORY',docid,'First Checked By',realid,cso_doc['First Checked By:']);
        update_object_property(updates,'HISTORY',docid,'Second Checked By',realid,cso_doc['Second Checked By:']);
        update_object_property(updates,'HISTORY',docid,'Date Checked',realid,cso_doc['Date Checked']);
        update_object_property(updates,'HISTORY',docid,'Filed By',realid,cso_doc['Filed By:']);
        update_object_property(updates,'HISTORY',docid,'Filed Date',realid,cso_doc['Filed Date']);
        


    }

}

export function convertADMdata(updates, adm_obj){
    updates['ADM'] = {}
    updates['ADM_HISTORY'] = {}
    for(let i in adm_obj['DOCUMENT']){
        const adm_doc = adm_obj['DOCUMENT'][i];
        const docid = adm_doc['DOCUMENTID'];
        const realid = adm_doc['COPYID'];
        create_node_object(updates,'ADM',docid);
        create_node_object(updates,'ADM_HISTORY',docid);

        udpate_if_exist(updates,'ADM',docid,'ENP',adm_doc['Estimated Number of Participants (ENP)']);
        udpate_if_exist(updates,'ADM',docid,'ANP',adm_doc['Actual Number of Participants (ANP)']);
        udpate_if_exist(updates,'ADM',docid,'ENMP',adm_doc['Estimated Number of Member Participants (ENMP)']);
        udpate_if_exist(updates,'ADM',docid,'ANMP',adm_doc['Actual Number of Member Participants (ANMP)']);
        udpate_if_exist(updates,'ADM',docid,'EXPENSES',adm_doc['Expenses Incurred']);
        udpate_if_exist(updates,'ADM',docid,'ENP',adm_doc['Estimated Number of Participants (ENP)']);
        udpate_if_exist(updates,'ADM',docid,'Status',adm_doc['Status']);
        // udpate_if_exist(updates,'ADM',docid,'ENP',adm_doc['Timestamp']);
        udpate_if_exist(updates,'ADM',docid,'Last Updated',adm_doc['Timestamp']);
        udpate_if_exist(updates,'ADM',docid,'Checked By',adm_doc['Checked By:↵(Exeteam)']);
        udpate_if_exist(updates,'ADM',docid,'Date Logged',adm_doc['Date Logged']);
        udpate_if_exist(updates,'ADM',docid,'Title',adm_doc['Activity Title']);
        // SOBRANG KULANG PERO NAKAKATAMAD XD
        update_object_property(updates,'ADM_HISTORY',docid,'ENP', realid, adm_doc['Estimated Number of Participants (ENP)']);
        update_object_property(updates,'ADM_HISTORY',docid,'ANP', realid, adm_doc['Actual Number of Participants (ANP)']);
        update_object_property(updates,'ADM_HISTORY',docid,'ENMP', realid, adm_doc['Estimated Number of Member Participants (ENMP)']);
        update_object_property(updates,'ADM_HISTORY',docid,'ANMP', realid, adm_doc['Actual Number of Member Participants (ANMP)']);
        update_object_property(updates,'ADM_HISTORY',docid,'EXPENSES', realid, adm_doc['Expenses Incurred']);
        update_object_property(updates,'ADM_HISTORY',docid,'ENP', realid, adm_doc['Estimated Number of Participants (ENP)']);
        update_object_property(updates,'ADM_HISTORY',docid,'ENP', realid, adm_doc['Timestamp']);
        update_object_property(updates,'ADM_HISTORY',docid,'Last Updated', realid, adm_doc['Timestamp']);
        update_object_property(updates,'ADM_HISTORY',docid,'Checked By', realid, adm_doc['Checked By:↵(Exeteam)']);
        update_object_property(updates,'ADM_HISTORY',docid,'Date Logged', realid, adm_doc['Date Logged']);
        update_object_property(updates,'ADM_HISTORY',docid,'Status', realid, adm_doc['Status']);
        update_object_property(updates,'ADM_HISTORY',docid,'Title', realid, adm_doc['Activity Title']);
    }
}