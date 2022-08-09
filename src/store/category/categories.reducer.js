import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        currentState, // 即使只會改這部分，也要全部currentState先帶入對嗎？
        categoriesMap: payload,
      };
    default:
      return currentState;
  }
};
