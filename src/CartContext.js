import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };


  const addToFavorites = (product) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.find(item => item.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const moveToFavorite = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      addToFavorites(product);
      removeFromCart(productId);
    }
  };

  const toggleFavorite = (product) => {
    setFavorites(prevFavorites => {
      const existingIndex = prevFavorites.findIndex(item => item.id === product.id);
      if (existingIndex >= 0) {
        return prevFavorites.filter(item => item.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const isFavorite = (productId) => {
    return favorites.some(item => item.id === productId);
  };


  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      moveToFavorite,
      favorites,
      toggleFavorite,
      isFavorite,
      calculateSubtotal,
      calculateTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};