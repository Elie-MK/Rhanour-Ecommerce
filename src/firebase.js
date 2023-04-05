// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3_kC6k9EmwoEgzXShLjkvJDR7xZamzY0",
  authDomain: "rhanourboutique-1ea9e.firebaseapp.com",
  databaseURL: "https://rhanourboutique-1ea9e-default-rtdb.firebaseio.com",
  projectId: "rhanourboutique-1ea9e",
  storageBucket: "rhanourboutique-1ea9e.appspot.com",
  messagingSenderId: "922937481896",
  appId: "1:922937481896:web:01a9c79d0dd6548fe4809d",
  measurementId: "G-9MQZBPYHRW"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

export default auth; 
