import React from "react";
// import { CartContext } from "../../contexts/cart.context_useReducer";
import { useSelector } from "react-redux";
import {
  cartItemsSelector,
  cartPriceSelector,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  // const { cartItems, totalPrice } = useContext(CartContext);
  const cartItems = useSelector(cartItemsSelector);
  const totalPrice = useSelector(cartPriceSelector);

  // 有更動就要重新計算total

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem product={item} key={item.id} />;
      })}
      <div className="total">Total $ {totalPrice}</div>
    </div>
  );
};

export default Checkout;
