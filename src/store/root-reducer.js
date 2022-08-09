import { combineReducers } from "redux";
import { categoriesReducer } from "./category/categories.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
