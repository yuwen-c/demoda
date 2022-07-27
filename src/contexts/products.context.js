import React, { useState, createContext, useEffect } from "react";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";
// import SHOP_DATA from "../shop-data.json"; 可刪

export const ProductsContext = createContext({ products: [] });

export const ProductsProvider = ({ children }) => {
  // make api call to firestore to get product data
  const [products, setProducts] = useState([]);
  const value = { products };

  /**
   * only do this one time to store our products data.
   */
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("categoryMap", categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
