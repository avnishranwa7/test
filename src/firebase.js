import firebase from 'firebase'; 
var firebaseConfig = {
    apiKey: "AIzaSyAXk1Olorb7VJ3Rkn_QI0TsWVQ1Mn52eI4",
    authDomain: "photo-95841.firebaseapp.com",
    projectId: "photo-95841",
    storageBucket: "photo-95841.appspot.com",
    messagingSenderId: "585476569355",
    appId: "1:585476569355:web:498db3a4eb29c1d6df4a0e",
    measurementId: "G-QBDSXZEJN3"
  };
const fire = firebase.initializeApp(firebaseConfig);
const database = fire.firestore();
const storage = firebase.storage()
export{
  storage, database as default
}