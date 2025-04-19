import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((apple) => apple.id === item.id);

      if (existingItem) {
        return prevItems.map((apple) =>
          apple.id === item.id
            ? { ...apple, quantity: apple.quantity + 1 }
            : apple
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((apple) => apple.id !== item.id)
    );
  };

  const updateQuantity = (item, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((apple) =>
        apple.id === item.id ? { ...apple, quantity: newQuantity } : apple
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  return useContext(CartContext);
};
