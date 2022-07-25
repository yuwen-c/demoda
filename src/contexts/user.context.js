import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// actual value you can access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

// a provider function that returns a context.Provider, which will wrap App
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  // subscribe the auth state listener
  /**
   * useEffect callback function only executes once after mounting (since [])
   * then the listener keeps working
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    // clean up function, will be triggered when un-mount
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
