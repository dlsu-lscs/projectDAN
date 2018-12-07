
import { database } from '../utils/firebase';

export function get_general_info(id, callback){
    database.ref('GENERAL/'+id).once('value').then( snapshot => {
        const gen_info = snapshot.val();
        callback(gen_info);
    })
}

export function get_aps_info(id, callback){
    database.ref('APS/'+id).once('value').then( snapshot => {
        const aps_info = snapshot.val();
        callback(aps_info);
    })
}

export function get_det_info(id, callback){
    database.ref('DETAILS/'+id).once('value').then( snapshot => {
        const det_info = snapshot.val();
        callback(det_info);
    })
}