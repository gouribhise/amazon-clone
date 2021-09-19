// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//import * as firebase from "firebase/app";
const firebaseConfig = {

    apiKey: "AIzaSyBiBOhP79_W4kDesBQe4xgD4RqkvJ45UV0",
  
    authDomain: "clone-3a9c7.firebaseapp.com",
  
    projectId: "clone-3a9c7",
  
    storageBucket: "clone-3a9c7.appspot.com",
  
    messagingSenderId: "739905180801",
  
    appId: "1:739905180801:web:85b21b21b70d917414a980",
  
    measurementId: "G-M2KNSJNLD3"
  
}; 
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };