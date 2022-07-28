import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import "./shop.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap = {} } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            category={categoriesMap[title]}
            key={title}
            title={title}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
