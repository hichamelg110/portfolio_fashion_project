import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const shirts = [
    { id: 10, name: "Long Sleeve Stretch Fit Shirt", price: 14.00, originalPrice: 20.00, discount: 30, image: "/bmm59433_white_xl.webp" },
    { id: 11, name: "Ecru Plus Dsgn Oversized T-shirt", price: 11.25, image: "/gzz64982_ecru_xl.webp" },
    { id: 12, name: "Multi Pastel Clouds T-Shirt", price: 8.99,discount: 50, originalPrice: 18.00, image: "/p3d7d34cc6aa8497fa92520b013346c53_multi_xl.jpeg" },
];

function Shirts() {
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
        products={shirts}
        title="Shirts"
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

export default Shirts;