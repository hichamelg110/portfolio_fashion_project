import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';
import './FeaturedProducts.css';

const products = [
  { id: 8, name: "Sequin Angel Sleeve Maxi Dress", price: 40.00, originalPrice: 50, image: "/gzz63836_black_xl.webp" },
  { id: 14, name: "Stud Detail Pointed Ballerina", price: 12.00, image: "/gzz88974_black_xl.jpeg" },
  { id: 12, name: "Multi Pastel Clouds T-Shirt", price: 8.99,discount: 50, originalPrice: 18.00, image: "/p3d7d34cc6aa8497fa92520b013346c53_multi_xl.jpeg" },
  { id: 2, name: "Iced Chunky Chain Necklace", price: 10.00, originalPrice: 28, image: "/bmm92115_silver_xl.jpeg" },
  { id: 4, name: "Onion Quilt Rucksack", price: 17.50, image: "/bmm91023_ecru_xl.jpeg" },
  { id: 1, name: "Plain Cap In Navy", price: 5.60, originalPrice: 8.00, discount: 30, image: "/bmm96017_navy_xl.jpeg" },
  { id: 6, name: "Bandage Double Layer Corset Maxi Dress", price: 37.50, originalPrice: 50.00, discount: 25, image: "/hzz03912_stone_xl_.jpeg" },
  




];

function FeaturedProducts() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const scrollRef = useRef(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="featured-products-container" id="featuredProducts">
      <h2 className="featured-products-title">Featured Products</h2>
      <div className="products-scroll-container">
        <button className="nav-arrow left" onClick={() => scroll('left')}>&lt;</button>
        <div className="products-scroll" ref={scrollRef}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <button className="nav-arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>
      {showPopup && selectedProduct && (
        <AddToCartPopup
          product={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default FeaturedProducts;