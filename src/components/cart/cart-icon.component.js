import React from "react";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ number }) => {
  return (
    <div className="cart-icon-container">
      <Cart className="shopping-icon" />
      <span className="item-count">{number}1</span>
    </div>
  );
};

export default CartIcon;
