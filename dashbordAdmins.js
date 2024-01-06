
  var db = firebase.firestore();
  var curruser = firebase.auth().currentUser;

//   var docRef = db.collection(curruser);
console.log(curruser);
//   docRef.get().then((doc) => {
//       if (doc.exists) {
//         // document.getElementById("name").innerHTML = doc.name;
//         // document.getElementById("small").innerHTML = doc.email;
//         console.log(curruser);
//       } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//       }
//   }).catch((error) => {
//       console.log("Error getting document:", error);
//   });
  


  db.collection("admins")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        let row = `<tr>
                              <td>${data.name}</td>
                              <td>${data.id}</td>

                        </tr>`;
        let table = document.getElementById("tableAdmin");
        table.innerHTML += row;
        document.getElementById("adminCount").innerHTML = querySnapshot.size;
      });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  