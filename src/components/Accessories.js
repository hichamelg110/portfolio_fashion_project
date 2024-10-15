import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const accessories = [
  { id: 1, name: "Plain Cap In Navy", price: 5.60, originalPrice: 8.00, discount: 30, image: "/bmm96017_navy_xl.jpeg" },
  { id: 2, name: "Iced Chunky Chain Necklace", price: 10.00, originalPrice: 28, image: "/bmm92115_silver_xl.jpeg" },
  { id: 3, name: "Butterfly Brown Brown Gradient GF0352", price: 40.00, originalPrice: 50, discount: 20, image: "/p00d1ba76ea294d07bc68d9602d87cc67_brown_xl.jpeg" },
  { id: 4, name: "Onion Quilt Rucksack", price: 17.50, image: "/bmm91023_ecru_xl.jpeg" },
  { id: 5, name: "Hanging Square Diamonte Earring in Silver", price: 16.00, originalPrice: 26.00, discount: 38, image: "/p54748abfcf3047c391fbe7fe9ccb4d84_silver_xl.jpeg" },
];

function Accessories() {
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
        products={accessories}
        title="Accessories"
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

export default Accessories;