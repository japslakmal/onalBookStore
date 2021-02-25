// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/storage";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAGRNP5-hlrlOWtxOn-BMUaNIJ48xSSmZQ",
  authDomain: "onal-bookstore.firebaseapp.com",
  projectId: "onal-bookstore",
  storageBucket: "onal-bookstore.appspot.com",
  messagingSenderId: "234259986455",
  appId: "1:234259986455:web:ab425e5f320732910ac452",
  measurementId: "G-GZBSKRQFLS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };