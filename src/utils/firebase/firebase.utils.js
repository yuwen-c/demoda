import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider, another authentication provider
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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

// authentication service provides by google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

// use firestore service
export const db = getFirestore();

// to store our user data in db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error in creating new user", error);
    }
  }
  return usersDocRef;
};

// user sign up, create user with firestore service
export const createAuthUsersWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  return;
};

// user sign in with email and password
export const signInWithUsersEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  return;
};

export const userSignOut = async () => {
  return await signOut(auth);
};
