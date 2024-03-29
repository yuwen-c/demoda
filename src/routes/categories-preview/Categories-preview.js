import React from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/category/categories.selector";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const { categoriesMap = {} } = useContext(CategoriesContext);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          return (
            <CategoryPreview
              category={categoriesMap[title]}
              key={title}
              title={title}
            />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
