import React from 'react';
import { useCart } from '../CartContext';

import './Cart.css';

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    calculateSubtotal,
    calculateTotal
  } = useCart();

  const handleQuantityChange = (productId, change) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + change);
    }
  };

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  return (
    <div className="cart-container">
      <h1>MY BAG ({cart.length} items)</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <div className="item-actions">
                  <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-button">Continue Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
