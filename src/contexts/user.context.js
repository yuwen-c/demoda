import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

/** a useReducer version */

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const INITIAL_STATE = {
  currentUser: null,
};

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...initState,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [updatedState, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    const action = {
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    };
    dispatch(action);
  };

  // subscribe the auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    // clean up function, will be triggered when un-mount
    return unsubscribe;
  }, []);

  const { currentUser } = updatedState;
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
