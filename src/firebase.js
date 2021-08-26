import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8WoeSBhMg0hgVFNT4NOd604ttEfvCN50",
  authDomain: "todo-df831.firebaseapp.com",
  projectId: "todo-df831",
  storageBucket: "todo-df831.appspot.com",
  messagingSenderId: "459692456501",
  appId: "1:459692456501:web:a188593cb056bca1e80f7c",
  measurementId: "G-3MBPZ3N7DZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
