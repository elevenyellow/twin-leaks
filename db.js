const firebase = require("firebase");
const firebase_creds = require("./auth/firebase_credentials")


const db = firebase.initializeApp(firebase_creds.firebaseConfig);

const firebase_database = db.database();

module.exports = { firebase_database };