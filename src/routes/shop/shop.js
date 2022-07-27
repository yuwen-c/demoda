import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap = {} } = useContext(CategoriesContext);

  return (
    <>
      {Object.values(categoriesMap).map((category) => {
        return <CategoryPreview category={category} key={category?.title} />;
      })}
    </>
  );
};

export default Shop;
