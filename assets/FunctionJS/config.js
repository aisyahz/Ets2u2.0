// firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJdjvmdJeS7_WYMIHU-zv4b4Fc2D5s-Yo",
    authDomain: "contact-form-7ec86.firebaseapp.com",
    databaseURL: "https://contact-form-7ec86-default-rtdb.firebaseio.com",
    projectId: "contact-form-7ec86",
    storageBucket: "contact-form-7ec86.appspot.com",
    messagingSenderId: "643370383331",
    appId: "1:643370383331:web:61c6ca2a2f257b24ba92d6"

};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, firebase };
