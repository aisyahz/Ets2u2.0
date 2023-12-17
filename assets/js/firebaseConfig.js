// firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyAfMYj8n5MRszOHDfNp75vY_8EJx_IOHu0",
  authDomain: "my-ets2u.firebaseapp.com",
  projectId: "my-ets2u",
  storageBucket: "my-ets2u.appspot.com",
  messagingSenderId: "365095721936",
  appId: "1:365095721936:web:f1e93f9700467d8bda77d5",
  measurementId: "G-SK81X5VH07"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();