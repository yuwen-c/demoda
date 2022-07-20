import { createContext, useState } from "react";

// actual value you can access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

// a provider function that returns a context.Provider, which will wrap App
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
