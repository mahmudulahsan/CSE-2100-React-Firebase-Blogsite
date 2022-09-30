// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdXMBtsnZbGSiUmSp765uqpSjNqiYLFyQ",
  authDomain: "kotha-88498.firebaseapp.com",
  projectId: "kotha-88498",
  storageBucket: "kotha-88498.appspot.com",
  messagingSenderId: "621875320283",
  appId: "1:621875320283:web:76a6c91bf9a97c509a43fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);