// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76JemSUPKyGLWtQr_lzdpb4GWq4UcyRI",
  authDomain: "kotha-e1824.firebaseapp.com",
  projectId: "kotha-e1824",
  storageBucket: "kotha-e1824.appspot.com",
  messagingSenderId: "804430926366",
  appId: "1:804430926366:web:76474fa2eeefd8eb1e140f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);