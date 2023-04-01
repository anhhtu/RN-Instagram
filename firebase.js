// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRDyXITRaDbaj4j3tWuCOp3whptn_abEs",
  authDomain: "rn-instagram-d5742.firebaseapp.com",
  projectId: "rn-instagram-d5742",
  storageBucket: "rn-instagram-d5742.appspot.com",
  messagingSenderId: "474467169187",
  appId: "1:474467169187:web:e607a53f84c10942b8e016"
};

// Initialize Firebase
!firebase.apps.length ?
firebase.initializeApp(firebaseConfig) :
firebase.appId()

export default firebase;