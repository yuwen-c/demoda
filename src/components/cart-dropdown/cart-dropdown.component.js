import React, { useContext } from "react";
import Button from "../button/button";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
