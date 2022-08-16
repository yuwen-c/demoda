import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsNumberSelector } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
// import { CartContext } from "../../contexts/cart.context_useReducer";
import { CartSvg, CartSvgContainer, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const number = useSelector(cartItemsNumberSelector);
  // const { isCartOpen, setIsCartOpen, number } = useContext(CartContext);

  const handleCartOpen = () => {
    dispatch(setIsCartOpen());
  };
  return (
    <CartSvgContainer
      // onClick={() => {
      //   setIsCartOpen(!isCartOpen);
      // }}
      onClick={handleCartOpen}
    >
      <CartSvg />
      <Count>{number || 0}</Count>
    </CartSvgContainer>
  );
};

export default CartIcon;
