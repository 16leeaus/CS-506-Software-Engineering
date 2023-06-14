// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // database we are using

// link used to create connection to firebase
// https://docs.expo.dev/guides/using-firebase/#usage-with-expo

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjeAvHmBq_1rQQyJDPbo-7ntUyVXtSTew",
  authDomain: "let-s-get-physical.firebaseapp.com",
  projectId: "let-s-get-physical",
  storageBucket: "let-s-get-physical.appspot.com",
  messagingSenderId: "346280354941",
  appId: "1:346280354941:web:64e09799898f2a9ae2fd14",
  measurementId: "G-YDTRS5LBJL"
}; // NEED TO MAKE HIDDEN 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Authentication
export const auth = getAuth(app);
// Get database
export const db = getFirestore(app);
// export needed to access variables on other pages.