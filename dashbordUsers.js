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

db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let row = `<tr>
                            <td>${data.name}</td>
                            <td>${data.id}</td>
                            <td>${data.log? 'registered':'not registered'}</td>
                      </tr>`;
      let table = document.getElementById("tableDashbord");
      table.innerHTML += row;
      document.getElementById("usersCount").innerHTML = querySnapshot.size;
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
