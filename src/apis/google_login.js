
/**
 * LOGIN API FUNCTION GET CALLED AT '../utils/google-auth.js' TO WORK WITH AUTHORIZATION SEPERATELY FROM API
 */
import { LOG_IN } from '../actions/actionTypes';
import { handleSignIn, handleSignOut} from '../utils/google-auth';
import { initial_pull } from './sheets_to_firebase';
/**
 * 
 * @param {*} user the user object google api returns
 * @param {*} dispatch dispatch function attached in google-auth.js by our store connect in routes
 * @param {*} callback callback function declared in routes
 */
export function log_in_user(user, dispatch, callback){
    dispatch({
        type: LOG_IN,
        payload: user
    });
    initial_pull();
    callback();
}

export function login(){
    handleSignIn();
}

export function logout(){
    handleSignOut();
}