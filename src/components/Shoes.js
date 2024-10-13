import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const shoes = [
  { id: 101, name: "Classic Leather Belt", price: 29.99, image: "/PhotoRoom_016_20240928_113051_1800x1800.jpeg" },
  { id: 102, name: "Silver Chain Necklace", price: 39.99, image: "/PhotoRoom_001_20230605_160655_1728x.jpeg" },
  { id: 1, name: "ESSENTIALS HOODED JACKET", price: 25.00, discount: 20, image: "/1719089405901.jpeg" },
  { id: 104, name: "Leather Wallet", price: 49.99, image: "/accessories/wallet.jpg" },
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