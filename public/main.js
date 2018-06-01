

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

const projectDB = firestore.collection("project");
const projectList = document.querySelector("#projectList");
const projectName = document.querySelector("#projectName");
const saveProject = document.querySelector("#saveProject");


saveProject.addEventListener("click", function() {
    const savedProject = projectName.value;
    console.log("Project turned in: ", savedProject);
    projectDB.add({
        projectName: savedProject
    }).catch(function(error) {
        console.error("Error adding:", error)
    })
    projectDB.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
});

// projectDB.collection("project").get().then(function(querySnapshot){
//     querySnapshot.forEach(function(doc) {
//         console.log(doc.id, " => ", doc.data());
//     });
// });
