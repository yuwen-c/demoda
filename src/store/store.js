import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/** a simple version w/o logger helper */
// export const store = createStore(rootReducer)

/** use middlewares version */
// const middlewares = [logger];
// export const store = createStore(rootReducer, undefined, middlewares);

/** use compose enhancer */
// const middleWares = [logger];
// const composeEnhancer = compose(applyMiddleware(...middleWares));
// export const store = createStore(rootReducer, undefined, composeEnhancer);

// /** customized logger to break down what's doing inside of a middleware */
const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("action: ", action);
  console.log("current:", store.getState());
  next(action);
  console.log("updated: ", store.getState());
};
const middleWares = [customLogger];

const composeEnhancer = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composeEnhancer);
