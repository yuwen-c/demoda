import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

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

  /**
   * 後來改用GoogleRedirect方法登入，不用pop up
   */
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
      <button onClick={signInWithGoogleRedirect}>Sign in with redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
