import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  /** 計算邏輯不要放在reducer，放到selector */
  // number: 0,
  // totalPrice: 0,
};

export const cartReducer = (currentState = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...currentState,
        isCartOpen: !currentState.isCartOpen,
      };
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...currentState,
        ...payload,
      };

    default:
      return currentState;
  }
};
