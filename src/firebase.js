import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI7s-dQu30hohmhKgHp2VlwgD5ZsByORE",
  authDomain: "twitter-clone-2c69c.firebaseapp.com",
  projectId: "twitter-clone-2c69c",
  storageBucket: "twitter-clone-2c69c.appspot.com",
  messagingSenderId: "1027043954198",
  appId: "1:1027043954198:web:3960f0d88c2ca04f2a2f37",
  measurementId: "G-TRFB6T3JER",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
