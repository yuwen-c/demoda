import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <div className="name">{name}</div>
        <div>
          {quantity} X $ {price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
