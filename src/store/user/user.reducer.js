import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

/**
 * in useReducer we pass initial state as first parameter,
 * so w/o useReducer, assign initial state as default value here
 */
export const userReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload,
      };
    /**
     * since redux has only one dispatch,
     * when there is nothing to do with this reducer,
     * by default, return the currentState.
     */
    default:
      return currentState;
  }
};
