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
    var name = document.getElementById("name").value;
  var pass = document.getElementById("pwd").value;
  var nic = document.getElementById("NIC").value;
  var email = document.getElementById("email").value;
        
    if (name == "" || pass == "" || nic == "" || email=="") {
        alert("Empty Fields");
     }
     else{
        console.log("connecting to firebase...");
        storeData();

     }
}

  
function storeData() {
 
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pwd").value;
  var nic = document.getElementById("NIC").value;
  var email = document.getElementById("email").value;

     db.collection("admins").doc(email).set({
         name: name,
         id: nic,
         email: email,
     })
     
     .then(function() {
         alert("Doc successful");
     })
     .catch(function(error) {
        alert.error("Error writing doc", error);
     });


    // firebase code
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((result) => {
        // Signed in
        alert("You are Signed Up");
        console.log(result);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
}
