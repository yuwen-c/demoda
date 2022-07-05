// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoroqo2BRmbixmkj2JeuefMmHvAKgGpcU",
  authDomain: "demoda-db.firebaseapp.com",
  projectId: "demoda-db",
  storageBucket: "demoda-db.appspot.com",
  messagingSenderId: "482324297691",
  appId: "1:482324297691:web:011fd55ee3c236c18699fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
