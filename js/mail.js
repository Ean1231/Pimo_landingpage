
 var firebaseConfig = {

  apiKey: "AIzaSyCY5SNjUYPlfhxGUtb0gvVgrAYSwIR3RLA",
  authDomain: "pimolandingpage.firebaseapp.com",
  databaseURL: "https://pimolandingpage-default-rtdb.firebaseio.com",
  projectId: "pimolandingpage",
  storageBucket: "pimolandingpage.appspot.com",
  messagingSenderId: "156986526742",
  appId: "1:156986526742:web:a41bedf69597d30c95b937",
  measurementId: "G-NDQRYS0967"

};

firebase.initializeApp(firebaseConfig);
  

var message, name, contact, lname, persal

function Ready (){
    fname = document.getElementById('name').value;
    contact = document.getElementById('contact').value;
    message = document.getElementById('message').value;
    lname = document.getElementById('lname').value;
    persal = document.getElementById('persal').value;
}

function add(){
    Ready();
    let currentDate = new Date();
    const db = firebase.firestore();
    // firebase.database().ref('subscrib/').set({
    //     message : message,
    //     fname : fname,
    //     contact: contact,
    //     lname : lname,
    //     persal : persal

    // });

    db.collection('subscribe').add({
        currentDate: currentDate,
        name: name,
        contact: contact,
        message:message,
        persal: persal,
        lname: lname,
    });

 
}

function time(){
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    console.log(time);

}


