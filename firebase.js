// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlowi-pSVAxeZBrmdEos_MUS9Ww1tIwX0",
  authDomain: "pantry-tracker-bec8a.firebaseapp.com",
  projectId: "pantry-tracker-bec8a",
  storageBucket: "pantry-tracker-bec8a.appspot.com",
  messagingSenderId: "729141056824",
  appId: "1:729141056824:web:8dc7e7293c7b7a83559dcd",
  measurementId: "G-KFKSNZ667V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };