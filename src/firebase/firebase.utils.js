import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAAaAx1F8riOspOYIazB11X-naQy65vLU",
  authDomain: "e-commerce-9f534.firebaseapp.com",
  databaseURL: "https://e-commerce-9f534.firebaseio.com",
  projectId: "e-commerce-9f534",
  storageBucket: "",
  messagingSenderId: "334393019524",
  appId: "1:334393019524:web:ff84ab6e56b705b5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
