import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJY52bXdS76unbcrN0GgUiNq2i8iSyayo",
  authDomain: "cocktailbuilder-112fc.firebaseapp.com",
  projectId: "cocktailbuilder-112fc",
  storageBucket: "cocktailbuilder-112fc.appspot.com",
  messagingSenderId: "643118910965",
  appId: "1:643118910965:web:5b2d391e385090a824e4bc",
  measurementId: "G-X0R3MB6M6D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJY52bXdS76unbcrN0GgUiNq2i8iSyayo",
  authDomain: "cocktailbuilder-112fc.firebaseapp.com",
  projectId: "cocktailbuilder-112fc",
  storageBucket: "cocktailbuilder-112fc.appspot.com",
  messagingSenderId: "643118910965",
  appId: "1:643118910965:web:5b2d391e385090a824e4bc",
  measurementId: "G-X0R3MB6M6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
