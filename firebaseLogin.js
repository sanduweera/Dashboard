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
    var nic = document.getElementById("NIC").value;
    var name = document.getElementById("name").value;
    
    if (name == "" || nic == "") {
        alert("Empty Fields");
     }
     else{
        console.log("connecting to firebase...");
        console.log(nic);
        console.log(name);
      
        const docRef = db.collection('admins')
   .where("Name", "==", name)
   .where("id", "==", nic);
// ^ separate .where()

docRef.get().then((snapshot) => {
  if (snapshot.empty) {
    // no docs matched
    console.log("Invalid Credentials")
  } else {
    console.log(snapshot.docs[0].data())
    .then(function() {
      window.location.href = "/Dashboard.html";
    });
  }
})
}

}