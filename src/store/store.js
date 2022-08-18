import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { customLogger } from "../middlewares/logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
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
// remove customLogger to separate file

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

/**
 * only log when not being a production mode
 * filter out the falsy value
 */
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// const composeEnhancers = compose(applyMiddleware(...middleWares));
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composeEnhancers);
export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
