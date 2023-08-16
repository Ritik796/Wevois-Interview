// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLWEE9EVuZmH7byyYOEd1TZjzsByMCeIo",
  authDomain: "interview-8f792.firebaseapp.com",
  databaseURL: "https://interview-8f792-default-rtdb.firebaseio.com",
  projectId: "interview-8f792",
  storageBucket: "interview-8f792.appspot.com",
  messagingSenderId: "615834555988",
  appId: "1:615834555988:web:480a13c4a00e531d96ffc1",
  measurementId: "G-BVHE91L6B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);