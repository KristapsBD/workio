import firebase from "firebase";

import firebaseConfig from "./config/firebase.json";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
