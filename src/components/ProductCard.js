import React from 'react';
import { useCart } from '../CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { toggleFavorite, isFavorite } = useCart();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-container">
          <span className="product-price">$ {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">$ {product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <i className="fas fa-shopping-cart"></i>
      </button>
      <button
        className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
        onClick={handleFavoriteClick}
      >
        <i className="fas fa-heart"></i>
      </button>
    </div>
  );
};

export default ProductCard;
