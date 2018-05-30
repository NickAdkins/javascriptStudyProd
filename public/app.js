const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAk9cRB97ruVtZwRhP_qopD32Mfn9t6LCc",
    authDomain: "javascriptstudyprod.firebaseapp.com",
    databaseURL: "https://javascriptstudyprod.firebaseio.com",
    projectId: "javascriptstudyprod",
    storageBucket: "javascriptstudyprod.appspot.com",
    messagingSenderId: "562305102808"
};
firebase.initializeApp(config);