// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyH06UtVAXjsPbs5UAJ0OIyT3bB7-8wbw",
  authDomain: "madhackathon-e7cb6.firebaseapp.com",
  projectId: "madhackathon-e7cb6",
  storageBucket: "madhackathon-e7cb6.appspot.com",
  messagingSenderId: "571851449087",
  appId: "1:571851449087:web:a2b866b5641591c5ace2ca",
  measurementId: "G-8H3GV9PN8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,app,db}