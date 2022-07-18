import React, { useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUsersWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

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

  // then do submit function
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          name="displayName"
          type="text"
          onChange={handleFieldChange}
          value={displayName}
          required
        />
        <FormInput
          label="email"
          name="email"
          type="email"
          onChange={handleFieldChange}
          value={email}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          onChange={handleFieldChange}
          value={password}
          required
        />
        <FormInput
          label="confirm password"
          name="confirmPassword"
          type="password"
          onChange={handleFieldChange}
          value={confirmPassword}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
