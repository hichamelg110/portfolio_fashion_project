import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const shoes = [
  { id: 13, name: "Wide Fit Bow Pointed Toe Ballerina", price: 11.25, originalPrice: 15.00, discount: 25, image: "/female-black-wide-fit-bow-pointed-toe-ballerina- (1).jpeg" },
  { id: 14, name: "Stud Detail Pointed Ballerina", price: 12.00, image: "/gzz88974_black_xl.jpeg" },
  { id: 15, name: "Chunky Rope Lace Trainers In Black", price: 19.60, originalPrice: 28.00, discount: 30, image: "/bmm79127_black_xl.jpeg" },
  { id: 16, name: "Veris EL' Mesh Running Trainers", price: 22.50, image: "/p02b82a9270444e8a8cf46920329c2c47_black_xl.jpeg" },
];

function Shoes() {
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
        products={shoes}
        title="Shoes"
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

export default Shoes;