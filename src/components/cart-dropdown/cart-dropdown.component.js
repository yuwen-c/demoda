import React from "react";
import Button from "../button/button";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">list here</div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
