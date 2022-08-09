import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/Categories-preview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/category/categories.action";
/**
 * - nested routes: "index" route, which is /shop/*
 *   will render the categoriesPreview, which contains all categories
 * - "sub route", which is /shop/hats,
 *   will render single category
 */

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      return categoriesArray;
    };
    getCategoriesMap().then((result) => {
      dispatch(setCategories(result));
    });
  }, []);

  return (
    // these routes are going to be relative to the parent route, which is shop/
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
