const firebaseConfig = {
    apiKey: "AIzaSyCe9Hae8wLtU-Ewbqir5wHsm8omFd9eQmM",
    authDomain: "enhanced-vaccination-system.firebaseapp.com",
    databaseURL: "https://enhanced-vaccination-system-default-rtdb.firebaseio.com",
    projectId: "enhanced-vaccination-system",
    storageBucket: "enhanced-vaccination-system.appspot.com",
    messagingSenderId: "294943646773",
    appId: "1:294943646773:web:39378b863a6a4c22dbfd7c",
    measurementId: "G-2DGFZZZMXZ"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  

  //referencing the database
  var enhanced_vaccination_systemDB = firebase.database().ref("enhanced_vaccination_system");

  document.getElementById("adult_signup").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementByVal("name");
    var userid = getElementByVal("id");

    ///console.log(name,userid);
    }

  const getElementVal = (id) => {
    return document.getElementById(id).value;

};