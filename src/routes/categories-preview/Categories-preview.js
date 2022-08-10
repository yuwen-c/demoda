import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/categories.selector";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap = {} } = useContext(CategoriesContext);

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
