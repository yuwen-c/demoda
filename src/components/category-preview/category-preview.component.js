import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ category, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {category
          ?.filter((_, index) => index < 4)
          ?.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
