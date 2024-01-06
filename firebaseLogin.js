// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC98k--pr_8NqWy6l9sBRsnDlTH8l2-eR8",
  authDomain: "gpsd-3b169.firebaseapp.com",
  databaseURL: "https://gpsd-3b169-default-rtdb.firebaseio.com",
  projectId: "gpsd-3b169",
  storageBucket: "gpsd-3b169.appspot.com",
  messagingSenderId: "690462553077",
  appId: "1:690462553077:web:f7e0e007f9fc1463c266bc",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      alert("Sign in");
      location.replace("Dashboard.html");
    })
    .catch((error) => {
      alert(error.message);
    });
};
