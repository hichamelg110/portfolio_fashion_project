import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const products = [
  { id: 1, name: "ESSENTIALS HOODED JACKET", price: 25.00, discount: 20, image: "/1719089405901.jpeg" },
  { id: 2, name: "U_PATH RUN BLACK", price: 10.00, originalPrice: 28, image: "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg" },
  { id: 3, name: "NIKE CLUB", price: 30, originalPrice: 50, discount: 20, image: "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-33-16_130869_PXF_c99fb3c9-f3cc-417f-baee-31a919ddf5ce_468x.jpeg" },
  { id: 4, name: "U_PATH RUN BLACK", price: 21, image: "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg" },
];

function FeaturedProducts() {
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
        products={products} 
        title="Featured Products" 
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

export default FeaturedProducts;