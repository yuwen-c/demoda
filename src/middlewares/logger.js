// /** customized logger to break down what's doing inside of a middleware */
export const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("action: ", action);
  console.log("current:", store.getState());
  next(action);
  console.log("updated: ", store.getState());
};
