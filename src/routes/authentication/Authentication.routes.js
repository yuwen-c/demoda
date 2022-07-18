import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const Authentication = () => {
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

  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
