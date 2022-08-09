import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...currentState, // 即使只會改這部分，也要全部currentState，而且要spread
        categories: payload,
      };
    default:
      return currentState;
  }
};
