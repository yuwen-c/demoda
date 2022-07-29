import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPES_ENUM } from "../button/button";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </div>
      <Link to="/checkout">
        <Button buttonType={BUTTON_TYPES_ENUM.invert}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
