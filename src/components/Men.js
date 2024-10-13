import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const menProducts = [
  { id: 401, name: "Men's Dress Shirt", price: 49.99, image: "/men/dress-shirt.jpg" },
  { id: 402, name: "Chino Pants", price: 59.99, image: "/men/chinos.jpg" },
  { id: 403, name: "Polo Shirt", price: 34.99, image: "/men/polo.jpg" },
  { id: 404, name: "Denim Jacket", price: 79.99, image: "/men/denim-jacket.jpg" },
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