export const cartIsOpenSelector = (state) => state.cart.isCartOpen;

export const cartItemsSelector = (state) => state.cart.cartItems;

// 拿到購物車總數
const getNum = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};

export const cartItemsNumberSelector = (state) => {
  const { cartItems } = state.cart;
  return cartItems.length ? getNum(cartItems) : 0;
};

// 拿到總價
const getTotalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

export const cartPriceSelector = (state) => {
  const { cartItems } = state.cart;
  return cartItems.length ? getTotalPrice(cartItems) : 0;
};
