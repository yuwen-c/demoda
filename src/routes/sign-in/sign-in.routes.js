import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// 在這邊做一個登入按鈕，可彈出三方登入的視窗
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
};

export default SignIn;
