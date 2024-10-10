import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import AddToCartPopup from './AddToCartPopup';


function Favorites() {
  const { favorites, addToCart, toggleFavorite } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFavoriteClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  };

  return (
    <div className="favorites-container container mt-5">
      <h1 className="favorites-title text-center mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center">You haven't added any products to your favorites yet.</p>
      ) : (
        <div className="products-grid">
          {favorites.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price-container">
                    <span className="product-price">MAD {product.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button 
                className="favorite-btn active"
                onClick={(e) => handleFavoriteClick(e, product)}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          ))}
        </div>
      )}
      {showPopup && selectedProduct && (
        <AddToCartPopup
          product={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Favorites;