import React, { useState } from "react";
import {
  signInWithGoogleRedirect,
  signInWithUsersEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPES_ENUM } from "../button/button";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleReset = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password && email) {
      try {
        await signInWithUsersEmailAndPassword(email, password);
        handleReset();
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          case "auth/wrong-password":
            alert("incorrect password");
            break;
          default:
        }
        console.log("error from sign in", error);
      }
    } else {
      return;
    }
  };

  /**
   * 不用GoogleRedirect方法登入，用pop up
   */
  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   const { user } = response;
  //   createUserDocumentFromAuth(user);
  // };

  return (
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          onChange={handleFieldChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleFieldChange}
          value={password}
          required
        />
        <div className="button-group">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_ENUM.google}
            onClick={signInWithGoogleRedirect}
          >
            SIGN IN WITH Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
