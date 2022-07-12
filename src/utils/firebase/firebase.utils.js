import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// authentication service
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

// firestore service
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  // here userAuth means an user that pass the authentication
  // check if the db ref exists: "user" collection, and the unique key is uid
  const usersDocRef = doc(db, "users", userAuth.uid);

  // snapShot: get data from pointing to the ref
  const userSnapShot = await getDoc(usersDocRef);

  // save user's data if it doesn't exist
  if (!userSnapShot.exists()) {
    /**
     * 這幾個user資料只有這個block要用到，寫在if裡面就好，不要寫在外面。
     */
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(usersDocRef, {
        displayName,
        email,
        createDate,
      });
    } catch (error) {
      console.log("error in creating new user", error);
    }
  }
  return usersDocRef;
};
