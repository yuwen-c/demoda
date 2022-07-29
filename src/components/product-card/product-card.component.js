import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPES_ENUM } from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  /**
   * 把function宣告在return外面，效能比較好
   * */
  const handleAddItem = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES_ENUM.invert} onClick={handleAddItem}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
