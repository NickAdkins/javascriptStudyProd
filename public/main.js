

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAk9cRB97ruVtZwRhP_qopD32Mfn9t6LCc",
    authDomain: "javascriptstudyprod.firebaseapp.com",
    databaseURL: "https://javascriptstudyprod.firebaseio.com",
    projectId: "javascriptstudyprod",
    storageBucket: "javascriptstudyprod.appspot.com",
    messagingSenderId: "562305102808"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var firestore = firebase.firestore();

const projectDB = firestore.doc("project/UPlZctqdHYWDNDrMFFmp");
const projectList = document.querySelector("#projectList");
const projectInput = document.querySelector("#projectInput");
const saveProject = document.querySelector("#saveProject");


saveProject.addEventListener("click", function() {
    const savedProject = inputTextField.value;
    console.log("Project turned in: ", savedProject);
    projectDB.set({
        projectInput: savedProject
    }).then(function() {
        console.log("Project Saved")
    }).catch(function (error) {
        console.log("error: ", error);
    });
});