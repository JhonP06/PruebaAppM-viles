// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLPGvKwDRg_q4_4RH0kmGoCLLqgAwFjg",
  authDomain: "actividadautonoma-1.firebaseapp.com",
  databaseURL: "https://actividadautonoma-1-default-rtdb.firebaseio.com",
  projectId: "actividadautonoma-1",
  storageBucket: "actividadautonoma-1.firebasestorage.app",
  messagingSenderId: "529319657487",
  appId: "1:529319657487:web:fab6667ec9a6e18124237a",
  measurementId: "G-HL9DX5ZYL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);