//https://cloud.google.com/docs/authentication/api-keys
//https://developers.google.com/api-client-library/javascript/features/authentication
//https://cloud.google.com/endpoints/docs/openapi/when-why-api-key
//https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

//this entire file only runs once in routes, it is a reducer combined with google auth
//this isnt in the actions folder so all the google functions are in one file as all of this should only be called once

import { api_config } from './google_config';
import { log_in_user } from '../apis/google_login';
let dispatch = () => {}; //this gets initialized in initclient
let init_callback = () => {};

const getUserInfo = () => {
  window.gapi.client.load('plus','v1', function(){
    var request = window.gapi.client.plus.people.get({
      'userId': 'me'
    });
    request.execute(function(resp) {
      log_in_user(resp, dispatch, init_callback)
    });
   });
}



function updateSignInStatus(isSignedIn) {
  if (isSignedIn) {
    getUserInfo(dispatch);
  }
  else{
    init_callback(null);
  }
}

export const handleSignIn = (event) => {
  window.gapi.auth2.getAuthInstance().signIn();
}

export const handleSignOut = (event) => {
  window.gapi.auth2.getAuthInstance().signOut();
}

export const initClient = (callback) => {
      return (dispatch_function) => {
        dispatch = dispatch_function
        init_callback = callback;
        // 2. Initialize the JavaScript client library.
        window.gapi.client
          .init({
            apiKey: api_config.apiKey,
            clientId: api_config.clientId,
            scope: api_config.scope,
            ux_mode: api_config.ux_mode,
            redirect_uri: api_config.redirect_uri,
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: api_config.discoveryDocs
          })
          .then(() => {
          window.gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {updateSignInStatus(isSignedIn)});
          updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          // 3. Initialize and make the API request.
          //load(onLoad);
        });
      }
}