import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context_useReducer";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const handleAddItem = () => {
    addItemToCart(product);
  };

  const handleRemove = (number) => {
    removeItemFromCart(product, number);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => handleRemove(1)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItem}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemove}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
