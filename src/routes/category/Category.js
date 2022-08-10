import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap } from "../../store/category/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  console.log("category component re-render");
  const { category } = useParams();
  // const { categoriesMap = {} } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("useEffect");
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      {console.log("return")}
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Category;
