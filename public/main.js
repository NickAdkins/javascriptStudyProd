

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
    const list = document.createElement("LI");
    const newProject = document.createTextNode(JSON.stringify(savedProject));
    console.log("Project turned in: ", savedProject);
    projectDB.add({
        projectName: savedProject
    }).catch(function(error) {
        console.error("Error adding:", error)
    });
    list.appendChild(newProject);
    projectList.appendChild(list).classList.add("card", "card-body");
    document.getElementById('projectName').value = "";
});


realTimeList = function () {
    document.getElementById("projectList").innerHTML = "";
    var selectedValue = document.getElementById("dropDown").value;
    console.log(selectedValue);
    projectDB.where("projectName", "==", selectedValue).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " ", doc.data());
            const myData = doc.data();
            const list = document.createElement("LI");
            const newProject = document.createTextNode(JSON.stringify(myData.projectName));
            list.appendChild(newProject);
            projectList.appendChild(list).classList.add("card", "card-body");
        });
        
    }).catch(function (error) {
        console.log("error: ", error);
    });
}

realTimeList();






