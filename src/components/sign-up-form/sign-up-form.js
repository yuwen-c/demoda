import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUsersWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

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
        <label>displayName</label>
        <input
          required
          type="text"
          name="displayName"
          onChange={handleFieldChange}
          value={displayName}
        />
        <label>email</label>
        <input
          required
          type="email"
          name="email"
          onChange={handleFieldChange}
          value={email}
        />
        <label>password</label>
        <input
          required
          type="password"
          name="password"
          onChange={handleFieldChange}
          value={password}
        />
        <label>confirm password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          onChange={handleFieldChange}
          value={confirmPassword}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
