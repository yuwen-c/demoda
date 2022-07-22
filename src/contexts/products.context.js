import React, { useState, createContext, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({ products: [] });

export const ProductsProvider = ({ children }) => {
  // make api call to firestore to get product data
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    setProducts(SHOP_DATA);
  });

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
