import React, { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUsersWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  const { setCurrentUser } = useContext(UserContext);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleReset = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await createAuthUsersWithEmailAndPassword(
          email,
          password
        );
        const { user } = response;
        setCurrentUser(user);

        await createUserDocumentFromAuth(user, {
          displayName,
        });
        handleReset();
      } catch (error) {
        console.log("error in createUser from sign up", error);
      }
    } else {
      return;
    }
  };

  return (
    <div className="sign-up-form-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          name="displayName"
          type="text"
          onChange={handleFieldChange}
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm password"
          name="confirmPassword"
          type="password"
          onChange={handleFieldChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
