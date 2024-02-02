import { createContext, useState, useContext } from "react";

const CartContext = createContext();

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider };
