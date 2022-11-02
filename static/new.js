const firebaseConfig = {
    apiKey: "AIzaSyAsmwiVI7G26g03tK8W4K4IfSpKUX1Pin0",
    authDomain: "contactform1-3efca.firebaseapp.com",
    databaseURL: "https://contactform1-3efca-default-rtdb.firebaseio.com",
    projectId: "contactform1-3efca",
    storageBucket: "contactform1-3efca.appspot.com",
    messagingSenderId: "509156117955",
    appId: "1:509156117955:web:e26e8cf54fb6b38cd24176",
    measurementId: "G-0811575EWS"
  };

let inputs = document.querySelector('input');
  firebase.initializeApp(firebaseConfig);

  //
var contactFormDB1 = firebase.database().ref('contactForm1');

document.getElementById('login').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
  var  name1 = getElementVal('name1');

  var email1 = getElementVal('email1');
  var msg = getElementVal('msg');
  

  saveMessages(name1 , email1,msg);

  console.log(name1 , email1 , msg);

  document.querySelector('.alert').style.display = 'block';
//   document.getElementById("name1").innerHTML = "";
//   document.getElementById("email1").innerHTML = "";
//   document.getElementById("msg").innerHTML = "";

}

const saveMessages = (name1 , email1,msg)=>{
    var newContactForm = contactFormDB1.push();

    newContactForm.set({
        name1:name1,
        email1 : email1,
        msg :msg

    })
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

