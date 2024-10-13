import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const womenProducts = [
  { id: 301, name: "Women's Blouse", price: 39.99, image: "/women/blouse.jpg" },
  { id: 302, name: "Skinny Jeans", price: 59.99, image: "/women/jeans.jpg" },
  { id: 303, name: "Pencil Skirt", price: 49.99, image: "/women/skirt.jpg" },
  { id: 304, name: "Cardigan Sweater", price: 44.99, image: "/women/cardigan.jpg" },
];

function Women() {
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
        products={womenProducts}
        title="Women's Fashion"
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

export default Women;