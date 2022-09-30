// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIMnCGSb8i5d_B_25zEi2vjaMM1yUaOQ",
  authDomain: "kotha-6ba16.firebaseapp.com",
  projectId: "kotha-6ba16",
  storageBucket: "kotha-6ba16.appspot.com",
  messagingSenderId: "978300445895",
  appId: "1:978300445895:web:384fa025341fb69ae90ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);