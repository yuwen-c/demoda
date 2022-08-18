import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  // thunk version, add 2 more states:
  isLoading: false,
  error: null,
};

// export const categoriesReducer = (currentState = INITIAL_STATE, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return {
//         ...currentState, // 即使只會改這部分，也要全部currentState，而且要spread
//         categories: payload,
//       };
//     default:
//       return currentState;
//   }
// };

/** a thunk version Reducer */
export const categoriesReducer = (
  currentState = INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...currentState,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...currentState,
        isLoading: false,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...currentState,
        isLoading: false,
        error: payload,
      };
    default:
      return currentState;
  }
};
