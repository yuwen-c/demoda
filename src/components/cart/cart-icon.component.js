import React, { useContext } from "react";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, number } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <Cart className="shopping-icon" />
      <span className="item-count">{number || 0}</span>
    </div>
  );
};

export default CartIcon;
