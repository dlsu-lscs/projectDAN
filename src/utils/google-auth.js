//https://cloud.google.com/docs/authentication/api-keys
//https://developers.google.com/api-client-library/javascript/features/authentication
//https://cloud.google.com/endpoints/docs/openapi/when-why-api-key
//https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

//this entire file only runs once in routes, it is a reducer combined with google auth
//this isnt in the actions folder so all the google functions are in one file as all of this should only be called once

import { LOG_IN } from '../actions/actionTypes';
let dispatch = null; //this gets initialized in initclient
let init_callback = null;
const config = {
  apiKey: "AIzaSyAyhl5iITydfCvD-nX8urw2zgWzat7_fJk",
  clientId: '1098572407312-ui1vcaed17aiar7dc2fftl2m6erf24o6.apps.googleusercontent.com',
  scope: 'email https://www.googleapis.com/auth/spreadsheets',
  ux_mode: "redirect",
  redirect_uri: "http://localhost:3000/",
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1rYtyOLQ-qMM5_uDNukcNoTh5izZPqM5REO1IMNIydNY"
}

/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
const load = (callback) => {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "CSO APS!A2:C"
      })
      .then(
        response => {
          const data = response.result.values;
          console.log(data);
          const aps_data = data.map(aps => ({
            year: aps[0],
            title: aps[1],
            org: aps[2]
          })) || [];
          callback({
            aps_data
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

const getUserInfo = () => {
  window.gapi.client.load('plus','v1', function(){
    var request = window.gapi.client.plus.people.get({
      'userId': 'me'
    });
    request.execute(function(resp) {
      dispatch({
          type: LOG_IN,
          payload: resp
      });
      init_callback();
    });
   });
}

const onLoad = (data, error) => {
    if (data) {
      //const cars = data.cars;
      //this.setState({ cars });
    } else {
      //this.setState({ error });
    }
}


function updateSignInStatus(isSignedIn) {
  if (isSignedIn) {
    console.log(isSignedIn);
    getUserInfo(dispatch);
    load(onLoad);
  }
  else{
    init_callback();
  }
}

export const handleSignInClick = (event) => {
  window.gapi.auth2.getAuthInstance().signIn();
}

export const handleSignOutClick = (event) => {
  window.gapi.auth2.getAuthInstance().signOut();
}

export const initClient = (callback) => {
      return (dispatch_function) => {
        dispatch = dispatch_function
        init_callback = callback;
        // 2. Initialize the JavaScript client library.
        window.gapi.client
          .init({
            apiKey: config.apiKey,
            clientId: config.clientId,
            scope: config.scope,
            ux_mode: config.ux_mode,
            redirect_uri: config.redirect_uri,
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: config.discoveryDocs
          })
          .then(() => {
          window.gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn) => {updateSignInStatus(isSignedIn)});
          updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          // 3. Initialize and make the API request.
          //load(onLoad);
        });
      }
}