import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC-UtgtIS6ILmDRR4Sf428MqsvxoLwrl4Y",
  authDomain: "toodles-df8a5.firebaseapp.com",
  projectId: "toodles-df8a5",
  storageBucket: "toodles-df8a5.appspot.com",
  messagingSenderId: "1087911079568",
  appId: "1:1087911079568:web:11f20f3dfe9fc87cb4b215",
  measurementId: "G-5PDWGTBHWP",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
