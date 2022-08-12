import { createSelector } from "reselect";

/**
 * 先寫了一般的selector版本
 * 再改為optimized reselect 版本
 */

const selectCartReducer = (state) => state.cart;

// export const cartIsOpenSelector = (state) => state.cart.isCartOpen;

export const cartIsOpenSelector = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// export const cartItemsSelector = (state) => state.cart.cartItems;

export const cartItemsSelector = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

// 拿到購物車總數
// const getNum = (items) => {
//   return items.reduce((acc, item) => {
//     return acc + item.quantity;
//   }, 0);
// };

// export const cartItemsNumberSelector = (state) => {
//   const { cartItems } = state.cart;
//   return cartItems.length ? getNum(cartItems) : 0;
// };

export const cartItemsNumberSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }
);

// 拿到總價
// const getTotalPrice = (cartItems) => {
//   return cartItems.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
//   }, 0);
// };

// export const cartPriceSelector = (state) => {
//   const { cartItems } = state.cart;
//   return cartItems.length ? getTotalPrice(cartItems) : 0;
// };

export const cartPriceSelector = createSelector(
  [cartItemsSelector],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
);
