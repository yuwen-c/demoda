import { CART_ACTION_TYPES } from "./cart.types";

/** 3 actions:
 *  - set cart open or close
 *  - add item to cart
 *  - remove item from cart (can be remove 1 item or 1 product)
 */

const getItemUpdatedPayload = (cartItems) => {
  return {
    cartItems,
    // number: getNum(cartItems),
    // totalPrice: getTotalPrice(cartItems),
  };
};

const addCartItem = (items, addedItem) => {
  if (items.filter((item) => item.id === addedItem.id).length) {
    return items.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...addedItem, quantity: 1 }];
};

// 可以-1或拿掉整個product
const removeItem = (items, removedItem, number) => {
  if (number === 1) {
    const newArr = items.map((item) =>
      item.id === removedItem.id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
    return newArr.filter((item) => item.quantity >= 1);
  } else {
    return items.filter((item) => item.id !== removedItem.id);
  }
};

export const setIsCartOpen = () => {
  return {
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  };
};

// cartItems comes from state, also pass as param???
export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  const payload = getItemUpdatedPayload(newCartItems);
  return {
    type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
    payload,
  };
};

export const removeItemFromCart = (cartItems, product, number) => {
  console.log("removeItemFromCart", cartItems, product, number);
  const newCartItems = removeItem(cartItems, product, number);
  const payload = getItemUpdatedPayload(newCartItems);
  return {
    type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
    payload,
  };
};
