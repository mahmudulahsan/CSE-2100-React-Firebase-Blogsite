// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuunPYr0dGrksbzCu40eI7AduwLlPs7Mw",
  authDomain: "react-todo-2af9c.firebaseapp.com",
  projectId: "react-todo-2af9c",
  storageBucket: "react-todo-2af9c.appspot.com",
  messagingSenderId: "469539210753",
  appId: "1:469539210753:web:2f8bc647cb011ac80be200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);