const firebaseConfig = {
    apiKey: "AIzaSyBC2rAM6hznTpdcGkwr8AJYKDrobsjB2qQ",
    authDomain: "contactform-d3924.firebaseapp.com",
    databaseURL: "https://contactform-d3924-default-rtdb.firebaseio.com",
    projectId: "contactform-d3924",
    storageBucket: "contactform-d3924.appspot.com",
    messagingSenderId: "160957964659",
    appId: "1:160957964659:web:c291c5c8aaac79ca876506",
    measurementId: "G-F01PTSFV03"
  };

  firebase.initializeApp(firebaseConfig);

  //
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('login').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
  var  name = getElementVal('name');
  var birthday = getElementVal('birthday');
  var blood = getElementVal('blood');
  var age = getElementVal('age');
  var email = getElementVal('email');
  var phone1 = getElementVal('p1');
  var phone2 = getElementVal('p2');
  var phone3 = getElementVal('p3');
  var phone4 = getElementVal('p4');
  var pweek = getElementVal('pweek');
  var slot = getElementVal('slot');
  var address = getElementVal('address');
  var postal = getElementVal('postal');

  saveMessages(name , birthday, blood,age,email,phone1,phone2,phone3,phone4,pweek,slot,address , postal);

  console.log(name , birthday, blood,age,email,phone1,phone2,phone3,phone4,pweek,slot,address , postal);

  document.querySelector('.alert').style.display = 'block';
}

const saveMessages = (name , birthday, blood,age,email,phone1,phone2,phone3,phone4,pweek,slot,address , postal)=>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name:name,
        birthday:birthday,
        blood:blood,
        age : age,
        email:email,
        phone1:phone1,
        phone2:phone2,
        phone3:phone3,
        phone4:phone4,
        pweek:pweek,
        slot:slot,
        address:address,
        postal:postal,

    })
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

