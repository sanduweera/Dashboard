const firebaseConfig = {
  apiKey: "AIzaSyC98k--pr_8NqWy6l9sBRsnDlTH8l2-eR8",
  authDomain: "gpsd-3b169.firebaseapp.com",
  databaseURL: "https://gpsd-3b169-default-rtdb.firebaseio.com",
  projectId: "gpsd-3b169",
  storageBucket: "gpsd-3b169.appspot.com",
  messagingSenderId: "690462553077",
  appId: "1:690462553077:web:f7e0e007f9fc1463c266bc",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function ErrorMsg() {
  var nic = document.getElementById("NIC").value;
  var name = document.getElementById("name").value;
  var gender = "";

  if (document.getElementById("Fgender").checked == true) {
    gender = document.getElementById("Fgender").value;
  } else if (document.getElementById("Mgender").checked == true) {
    gender = document.getElementById("Mgender").value;
  } else {
    alert("Select Radio button !");
  }
  if (gender == "" || name == "" || nic == "") {
    alert("Empty Fields");
  } else {
    var docRef = db.collection("users").doc(nic);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          alert("user already in the database");
        } else {
          console.log("connecting to firebase...");
          console.log(nic);
          console.log(name);
          console.log(gender);
          storeData(gender);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
}

function storeData(gender) {
  var nic = document.getElementById("NIC").value;
  var name = document.getElementById("name").value;

  db.collection("users").doc(nic).set({
    name: name,
    id: nic,
    gender: gender,
  });

  db.collection("users")
    .doc(nic)
    .collection("vaccines")
    .doc("Rubella")
    .set({
      name: "Rubella",
      status: "not yet",
    })
    .then(function () {
      alert("Doc successful");
    })
    .catch(function (error) {
      alert("Error writing doc" + error);
    });
}
