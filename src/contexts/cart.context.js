import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  list: [],
  setIsCartOpen: () => {},
  setList: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [list, setList] = useState([]);

  const value = { isCartOpen, setIsCartOpen, list, setList };
  // todo: get the original list from fetch
  // anytime when user "add" product, add new item to list
  useEffect(() => {
    setList([]);
  }, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
