import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" handler={() => addItemToCart(product)}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
