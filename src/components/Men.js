import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const menProducts = [
  { id: 1, name: "Plain Cap In Navy", price: 5.60, originalPrice: 8.00, discount: 30, image: "/bmm96017_navy_xl.jpeg" },
  { id: 2, name: "Iced Chunky Chain Necklace", price: 10.00, originalPrice: 28, image: "/bmm92115_silver_xl.jpeg" },
  { id: 15, name: "Chunky Rope Lace Trainers In Black", price: 19.60, originalPrice: 28.00, discount: 30, image: "/bmm79127_black_xl.jpeg" },
  { id: 10, name: "Long Sleeve Stretch Fit Shirt", price: 14.00, originalPrice: 20.00, discount: 30, image: "/bmm59433_white_xl.webp" },
  { id: 4, name: "Onion Quilt Rucksack", price: 17.50, image: "/bmm91023_ecru_xl.jpeg" },


];

function Men() {
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
        products={menProducts}
        title="Men's Fashion"
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

export default Men;