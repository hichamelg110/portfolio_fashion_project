import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const { products } = useCart();

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
      setShowNotification(true);
    } else {
      alert('Please select a size');
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <div className="product-page">
      <Notification 
  message="Product added to cart"
  isVisible={showNotification}
  onHide={() => setShowNotification(false)}
/>
      <div className="product-images">
        <img 
          src={product.images[mainImage]} 
          alt={product.name} 
          className="main-image" 
        />
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${product.name} thumbnail ${index + 1}`} 
              className={`thumbnail ${mainImage === index ? 'active' : ''}`}
              onClick={() => setMainImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">USD ${product.price.toFixed(2)}</p>
        <div className="size-selection">
          <p>Size</p>
          <div className="size-buttons">
            {product.sizes.map(size => (
              <button 
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button 
          className={`add-to-favorite ${isFavorite(product.id) ? 'favorited' : ''}`} 
          onClick={handleToggleFavorite}
        >
          {isFavorite(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <div className="product-description">
          <h2>Product Details</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

const Notification = ({ message, isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="notification success">
      {message}
    </div>
  );
};


export default ProductPage;