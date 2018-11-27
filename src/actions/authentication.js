import { LOG_IN } from './actionTypes';
import { auth } from '../utils/firebase';
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