import { database } from '../utils/firebase';


export function get_general_data(callback){
    database.ref('GENERAL').once('value').then( snapshot => {
        const gen_data = snapshot.val();
        callback(gen_data);
    })
}