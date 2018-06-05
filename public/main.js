

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
const loadProject = document.querySelector("#loadProject");


saveProject.addEventListener("click", function() {
    const savedProject = projectName.value;
    console.log("Project turned in: ", savedProject);
    projectDB.add({
        projectName: savedProject
    }).catch(function(error) {
        console.error("Error adding:", error)
    })

});

loadProject.addEventListener("click", function(){
    projectDB.doc("DxWRXmUzqt7lcNor2J4x").get().then(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            projectList.innerText = "Project list: " + myData.projectName;
        }
    }).catch(function (error) {
        console.error("Error loading:", error)
    });
});

realTimeList = function () {
    projectDB.get().then(function (querySnapshot) {
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



// realTimeList = function() {
//     projectDB.doc("7FWw2tjET9C0hlEKXLwV").onSnapshot(function (doc) {
//         if (doc && doc.exists) {
//             const myData = doc.data();
//             projectList.innerText = "Project list: " + myData.projectName;
//         }
//     });
//     }

// realTimeList = function() {
//     projectDB.get().then(function(querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             console.log(doc.id, " ", doc.data());
//                 if (doc && doc.exists) {
//                     const myData = doc.data();
//                     projectList.innerText = "Project list: " + JSON.stringify(myData.projectName);
//                 }else{
//                     projectList.innerText = "No Projects"
//                 }
//         });
//     }).catch(function(error) {
//         console.log("error: ", error);
//     });
// }

// projectDB.where("project", ">", 0).onSnapshot(function (querySnapshot) {
//     var projects = [];
//     querySnapshot.forEach(function (doc) {
//         projects.push(doc.data().projectName);
//     });
//     console.log("All Projects: ", projects.join(", "));
    
// });




