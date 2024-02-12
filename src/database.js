// @flow

import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-0FMLAKI1OVWtuLxlApejit3K5fvJMDA",
    authDomain: "prstbt-chatbox.firebaseapp.com",
    databaseURL: "https://prstbt-chatbox.firebaseio.com",
});
const database = Rebase.createClass( firebaseApp.database() );

export {
    firebaseApp,
    database
};