import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap } from "../../store/category/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/category/categories.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap = {} } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products?.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
