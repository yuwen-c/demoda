import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  number: 0,
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

/**
 * 把這個function宣告在CartProvider外面，應該是可以避免每次都重新宣告？
 */
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

const getNum = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [number, setNumber] = useState(0);

  // todo: get the original list from fetch
  // anytime when user "add" product, add new item to list
  useEffect(() => {
    setCartItems([]);
  }, []);

  useEffect(() => {
    setNumber(getNum(cartItems));
  }, [cartItems]);

  const addItemToCart = (addedItem) => {
    setCartItems(addCartItem(cartItems, addedItem));
  };

  const removeItemFromCart = (removedItem, number) => {
    setCartItems(removeItem(cartItems, removedItem, number));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    number,
    removeItemFromCart,
  };

  return (
    <div>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </div>
  );
};
