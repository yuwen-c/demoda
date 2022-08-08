import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context_useReducer";
import { CartSvg, CartSvgContainer, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, number } = useContext(CartContext);

  return (
    <CartSvgContainer
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <CartSvg />
      <Count>{number || 0}</Count>
    </CartSvgContainer>
  );
};

export default CartIcon;
