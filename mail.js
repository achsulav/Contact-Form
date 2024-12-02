const firebaseConfig = {

  apiKey: "AIzaSyCAt9e38fy-LEm0tAmT-nnj1KCG1g1lQxU",

  authDomain: "contactform-a3565.firebaseapp.com",

  databaseURL: "https://contactform-a3565-default-rtdb.firebaseio.com",

  projectId: "contactform-a3565",

  storageBucket: "contactform-a3565.firebasestorage.app",

  messagingSenderId: "80528037542",

  appId: "1:80528037542:web:0dfb2885ba0bbb2722c667"

};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
