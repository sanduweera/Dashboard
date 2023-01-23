const firebaseConfig = {
    apiKey: "AIzaSyC98k--pr_8NqWy6l9sBRsnDlTH8l2-eR8",
    authDomain: "gpsd-3b169.firebaseapp.com",
    databaseURL: "https://gpsd-3b169-default-rtdb.firebaseio.com",
    projectId: "gpsd-3b169",
    storageBucket: "gpsd-3b169.appspot.com",
    messagingSenderId: "690462553077",
    appId: "1:690462553077:web:f7e0e007f9fc1463c266bc"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function ErrorMsg(){
    var uid = document.getElementById("uid").value;
    var uname = document.getElementById("uname").value;
    var gender = "";
    if(document.getElementById("Fgender").checked == true){
        gender = document.getElementById("Fgender").value;
    }
    else if(document.getElementById("Mgender").checked == true){
        gender = document.getElementById("Mgender").value;
    }
    else{
        alert("Select Radio button !");
    }
    
    if (gender == "" || uname == "" || uid == "") {
        alert("Empty Fields");
     }
     else{
        console.log("connecting to firebase...");
        console.log(uid);
        console.log(uname);
        console.log(gender);
        storeData(gender);
     }
}
 
function storeData(gender) {
 
  var uid = document.getElementById("uid").value;
  var uname = document.getElementById("uname").value;

     db.collection("admins").doc(uid).set({
         Name: uname,
         id: uid,
         gender: gender,
     })
     
     .then(function() {
         alert("Doc successful");
     })
     .catch(function(error) {
        alert.error("Error writing doc", error);
     });
}
