import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const dresses = [
  { id: 6, name: "Bandage Double Layer Corset Maxi Dress", price: 37.50, originalPrice: 50.00, discount: 25, image: "/hzz03912_stone_xl_.jpeg" },
  { id: 7, name: "Sequin Scoop Back Maxi Dress", price: 37.50, discount: 25, originalPrice: 50.00, image: "/hzz05166_black_xl.webp" },
  { id: 8, name: "Sequin Angel Sleeve Maxi Dress", price: 40.00, originalPrice: 50, image: "/gzz63836_black_xl.webp" },
  { id: 9, name: "Onion Quilt Rucksack", price: 41.25, image: "/gzz14740_chartreuse_xl.jpeg" },
];

function Dresses() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  };

  return (
    <>
      <ProductGrid
        products={dresses}
        title="Dresses"
        onAddToCart={handleAddToCart}
      />
      {showPopup && selectedProduct && (
        <AddToCartPopup
          product={selectedProduct}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

export default Dresses;