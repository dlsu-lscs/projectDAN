import * as firebase from 'firebase'; //
const config = {
    apiKey: "AIzaSyBeuk03mSC4uNFNPtkQrz-zvfKy6sZIfTU",
    authDomain: "projectdan-562c2.firebaseapp.com",
    databaseURL: "https://projectdan-562c2.firebaseio.com",
    projectId: "projectdan-562c2",
    storageBucket: "projectdan-562c2.appspot.com",
    messagingSenderId: "983220852243"
};



firebase.initializeApp(config);

export const auth = firebase.auth();

//export const database = firebase.database();