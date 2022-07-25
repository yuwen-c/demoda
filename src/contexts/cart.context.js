import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  addItemToCart: () => {},
});

const addCartItem = (items, addedItem) => {
  console.log("addCartItem", items, addedItem);
  if (items.filter((item) => item.id === addedItem.id).length) {
    console.log("if");
    return items.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  console.log("addCartItem return", [...items, { ...addedItem, quantity: 1 }]);
  return [...items, { ...addedItem, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // todo: get the original list from fetch
  // anytime when user "add" product, add new item to list
  useEffect(() => {
    setCartItems([]);
  }, []);

  const addItemToCart = (addedItem) => {
    setCartItems(addCartItem(cartItems, addedItem));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return (
    <div>
      {console.log("cartItems", cartItems)}
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </div>
  );
};
