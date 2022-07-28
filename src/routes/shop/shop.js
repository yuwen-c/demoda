import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/Categories-preview";
import Category from "../category/Category";
/**
 * - nested routes: "index" route, which is /shop/*
 *   will render the categoriesPreview, which contains all categories
 * - "sub route", which is /shop/hats,
 *   will render single category
 */

const Shop = () => {
  return (
    // these routes are going to be relative to the parent route, which is shop/
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
