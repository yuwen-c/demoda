import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { cartItemsSelector } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/cart.context_useReducer";
import Button, { BUTTON_TYPES_ENUM } from "../button/button";
import CartItem from "../cart-item/cart-item.component";
import {
  EmptyMessage,
  DropDownContainer,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();
  // const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const handleCheckout = () => {
    dispatch(setIsCartOpen());
    navigate("/checkout");
  };
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
        <Button buttonType={BUTTON_TYPES_ENUM.invert} onClick={handleCheckout}>
          {/* <Link to="/checkout"> */}
          GO TO CHECKOUT
          {/* </Link> */}
        </Button>
      ) : null}
    </DropDownContainer>
  );
};

export default CartDropDown;
