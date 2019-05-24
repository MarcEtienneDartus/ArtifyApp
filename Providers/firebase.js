import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

let config = {
  //Real Database
  apiKey: "AIzaSyDeiD35Vm2Guv4fmkrolJ-KyG7CKZ5P5d0",
  authDomain: "artify-app.firebaseapp.com",
  databaseURL: "https://artify-app.firebaseio.com",
  projectId: "artify-app",
  storageBucket: "artify-app.appspot.com",
  messagingSenderId: "150935125892"
};
firebase.initializeApp(config);
export default firebase;