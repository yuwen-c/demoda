import React, { createContext, useReducer } from "react";

/** a useReducer version */

export const CartContext = createContext({
  number: 0,
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  totalPrice: 0,
});

const INITIAL_STATE = {
  number: 0,
  isCartOpen: false,
  cartItems: [],
  totalPrice: 0,
};

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  /** 優化1: 把新增跟減少合併為一種type */
  // ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  // REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
};

const cartReducer = (currentState, action) => {
  const { type, payload = {} } = action;
  /** 優化2: 不需要拆，整個把payload spread即可。 */
  // const { number, cartItems, totalPrice } = payload;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...currentState,
        isCartOpen: !currentState.isCartOpen,
      };
    /**
     * 應該是在底下的function呼叫那些add product / remove product ，並且把結果用payload傳進來
     * 這邊不需要做運算
     */
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...currentState,
        ...payload,
      };

    default:
      throw new Error(`unhandled error type ${type} in cartReducer`);
  }
};

const addCartItem = (items, addedItem) => {
  if (items.filter((item) => item.id === addedItem.id).length) {
    return items.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...addedItem, quantity: 1 }];
};

// 可以-1或拿掉整個product
const removeItem = (items, removedItem, number) => {
  if (number === 1) {
    const newArr = items.map((item) =>
      item.id === removedItem.id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
    return newArr.filter((item) => item.quantity >= 1);
  } else {
    return items.filter((item) => item.id !== removedItem.id);
  }
};

// 拿到購物車總數
const getNum = (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};

// 拿到總價
const getTotalPrice = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

export const CartProvider = ({ children }) => {
  const [updatedState, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { number, isCartOpen, cartItems, totalPrice } = updatedState;

  const setIsCartOpen = () => {
    const action = {
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
    };
    dispatch(action);
  };

  /**
   * 優化3: 另外寫一個function，把重複做number, price的地方抽出來
   */
  const getItemUpdatedPayload = (cartItems) => {
    return {
      cartItems,
      number: getNum(cartItems),
      totalPrice: getTotalPrice(cartItems),
    };
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    /**
     * 計算number跟totalPrice的動作，要在這邊做，還是reducer做？
     * -> 在這邊做，reducer doesn't handle business logic
     */
    // const payload = {
    //   cartItems: newCartItems,
    //   number: getNum(newCartItems),
    //   totalPrice: getTotalPrice(newCartItems),
    // };
    /** 優化3 */
    const payload = getItemUpdatedPayload(newCartItems);
    const action = {
      type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
      payload,
    };
    dispatch(action);
  };

  const removeItemFromCart = (product, number) => {
    const newCartItems = removeItem(cartItems, product, number);
    // const payload = {
    //   cartItems: newCartItems,
    //   number: getNum(newCartItems),
    //   totalPrice: getTotalPrice(newCartItems),
    // };
    const payload = getItemUpdatedPayload(newCartItems);
    const action = {
      type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
      payload,
    };
    dispatch(action);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    number,
    removeItemFromCart,
    totalPrice,
  };

  return (
    <div>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </div>
  );
};
