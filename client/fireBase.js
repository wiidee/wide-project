// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZKurJ8qCtRJnluZxWxneLqGRpazbiGE",
  authDomain: "wide-authontication.firebaseapp.com",
  projectId: "wide-authontication",
  storageBucket: "wide-authontication.appspot.com",
  messagingSenderId: "853243557386",
  appId: "1:853243557386:web:de0c39b7e3699e76c551f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };