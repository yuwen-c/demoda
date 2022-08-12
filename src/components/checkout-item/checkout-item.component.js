import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
// import { CartContext } from "../../contexts/cart.context_useReducer";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  // const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, product));
    // addItemToCart(product);
  };

  const handleRemove = (number) => {
    dispatch(removeItemFromCart(cartItems, product, number));
    // removeItemFromCart(product, number);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => handleRemove(1)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItem}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemove}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
