import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create context
const CartContext = createContext();

// 2️⃣ Custom hook
export const useCart = () => useContext(CartContext);

// 3️⃣ Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
