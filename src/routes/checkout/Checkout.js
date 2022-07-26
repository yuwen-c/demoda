import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);

  // 有更動就要重新計算total
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  const handleAddItem = (product) => {
    addItemToCart(product);
  };

  const handleRemove = (product, number) => {
    removeItemFromCart(product, number);
  };

  return (
    <>
      {cartItems.map((item) => {
        const { id, imageUrl, name, price, quantity } = item;
        const smallTotal = price * quantity;

        return (
          <div key={id}>
            <img src={imageUrl} alt={`${name}`} />
            <span>{name}</span> <span>{price}</span>
            <button onClick={() => handleRemove(item, 1)}>minus</button>
            <span>{quantity}</span>{" "}
            <button onClick={() => handleAddItem(item)}>add</button>
            <span>{smallTotal}</span>
          </div>
        );
      })}
      <div>{total}</div>
    </>
  );
};

export default Checkout;
