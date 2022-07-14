import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await getRedirectResult(auth);
      return response;
    };
    getData().then((res) => {
      if (res) {
        const { user } = res;
        createUserDocumentFromAuth(user);
      }
    });
  }, []);

  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   const { user } = response;
  //   createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>sign in page</h1>
      {/* <button onClick={logGoogleUser}>Sign in with Google popup</button> */}
      <br />
      <button onClick={signInWithGoogleRedirect} target="_blank">
        Sign in with redirect
      </button>
    </div>
  );
};

export default SignIn;
