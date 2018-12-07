import { LOG_IN, REF_KEYS } from './actionTypes';
import { auth } from '../utils/firebase';
import { GetRefKeys } from '../apis/firebase_to_store';
//reference: https://medium.com/quick-code/adding-authentication-to-react-redux-firebase-app-f0efcb1c519a
//this is depracated, will now use google authentication, found in utils/google_auth

export const AuthenticateUser = () => {
    return (dispatch) => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                dispatch({
                    type: LOG_IN,
                    payload: true
                });
            } else {
                dispatch({
                    type: LOG_IN,
                    payload: true
                });
            }
        });
    }
}

export const GetKeys = () => {
    return (dispatch) => {
        GetRefKeys((key, key_val) =>{
            dispatch({
                type: REF_KEYS,
                key: key,
                val: key_val,
            });
        })
    }
}