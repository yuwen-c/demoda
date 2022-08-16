import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

/** use redux-persist to store redux value in local storage,
 *  like cart items,
 *  so that when user refreshes, cara data is being persisted
 */

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["users"],
  // since user is being monitored by authStateChange
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// persist is not middleware! no need to put it here.
const middleWares = [customLogger];
const composeEnhancer = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composeEnhancer);

export const store = createStore(persistedReducer, undefined, composeEnhancer);
export const persistor = persistStore(store);
