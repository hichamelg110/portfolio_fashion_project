import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './AddToCartPopup.css';

const AddToCartPopup = ({ product, onClose }) => {
  const navigate = useNavigate();
  const { cart, calculateTotal } = useCart();

  const handleContinueShopping = () => {
    onClose();
  };

  const handleOrder = () => {
    navigate('/cart');
    onClose();
  };

  const total = calculateTotal();

  return (
    <div className="add-to-cart-popup">
      <div className="popup-header">
        <span className="success-icon">✓</span>
        <span>Product successfully added to cart</span>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="popup-content">
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>{product.price.toFixed(2)} $</p>
          <p>Quantity: 1</p>
        </div>
        <div className="cart-summary">
          <p>There are {cart.length} items in your cart.</p>
          <p>Total products: {total.toFixed(2)} $</p>
          <p>Total transport: free</p>
          <p>Total: {total.toFixed(2)} $</p>
        </div>
      </div>
      <div className="popup-actions">
        <button className="continue-shopping" onClick={handleContinueShopping}>Continue shopping</button>
        <button className="order-button" onClick={handleOrder}>
          <span className="checkmark">✓</span> Order
        </button>
      </div>
    </div>
  );
};

export default AddToCartPopup;