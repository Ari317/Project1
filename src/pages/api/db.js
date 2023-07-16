// var admin = require("firebase-admin");
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
} from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export function addRequest(message) {
  let data = collection(db, "Request");
  addDoc(data, { message });
}
export function getTrending(message) {
  let data = collection(db, "Request");
  getDoc(data, { message }).then((doc) => {
    return doc.data();
  });
}
