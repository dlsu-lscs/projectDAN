
import { database } from '../utils/firebase';
export function GetRefKeys(callback){
    database.ref('REFERENCE_KEYS').on('child_added', refkeys => {
        const key_val = refkeys.val();
        const key = refkeys.key;
        callback(key, key_val);
    })
}