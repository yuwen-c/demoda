import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ category }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{category?.title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {category?.items
          ?.filter((_, index) => index < 4)
          ?.map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
