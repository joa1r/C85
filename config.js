import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAQ4GN4Ulu7IscZlkni2COWmWgHejVZ6nQ",
  authDomain: "bicicleta-f2cd5.firebaseapp.com",
  projectId: "bicicleta-f2cd5",
  storageBucket: "bicicleta-f2cd5.appspot.com",
  messagingSenderId: "1032265325504",
  appId: "1:1032265325504:web:8766a1136b3ed6954ec625"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
