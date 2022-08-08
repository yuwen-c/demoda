import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context_useReducer";
import Button, { BUTTON_TYPES_ENUM } from "../button/button";
import CartItem from "../cart-item/cart-item.component";
import {
  EmptyMessage,
  DropDownContainer,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <DropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem product={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length ? (
        <Button buttonType={BUTTON_TYPES_ENUM.invert}>
          <Link to="/checkout">GO TO CHECKOUT</Link>
        </Button>
      ) : null}
    </DropDownContainer>
  );
};

export default CartDropDown;
