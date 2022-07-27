import React, { useState, createContext, useEffect } from "react";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({ categories: {} });

export const CategoriesProvider = ({ children }) => {
  // make api call to firestore to get product data
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  /**
   * only do this one time to store our products data.
   */
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      return categoryMap;
    };
    getCategoriesMap().then((result) => {
      setCategoriesMap(result);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
