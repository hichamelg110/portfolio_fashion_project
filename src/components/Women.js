import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import AddToCartPopup from './AddToCartPopup';
import { useCart } from '../CartContext';

const womenProducts = [
  { id: 3, name: "Butterfly Brown Brown Gradient GF0352", price: 40.00, originalPrice: 50, discount: 20, image: "/p00d1ba76ea294d07bc68d9602d87cc67_brown_xl.jpeg" },
  { id: 6, name: "Bandage Double Layer Corset Maxi Dress", price: 37.50, originalPrice: 50.00, discount: 25, image: "/hzz03912_stone_xl_.jpeg" },
  { id: 7, name: "Sequin Scoop Back Maxi Dress", price: 37.50, discount: 25, originalPrice: 50.00, image: "/hzz05166_black_xl.webp" },
  { id: 13, name: "Wide Fit Bow Pointed Toe Ballerina", price: 11.25, originalPrice: 15.00, discount: 25, image: "/female-black-wide-fit-bow-pointed-toe-ballerina- (1).jpeg" },
  { id: 12, name: "Multi Pastel Clouds T-Shirt", price: 8.99,discount: 50, originalPrice: 18.00, image: "/p3d7d34cc6aa8497fa92520b013346c53_multi_xl.jpeg" },
  { id: 9, name: "Onion Quilt Rucksack", price: 41.25, image: "/gzz14740_chartreuse_xl.jpeg" },
  { id: 14, name: "Stud Detail Pointed Ballerina", price: 12.00, image: "/gzz88974_black_xl.jpeg" },
  { id: 5, name: "Hanging Square Diamonte Earring in Silver", price: 16.00, originalPrice: 26.00, discount: 38, image: "/p54748abfcf3047c391fbe7fe9ccb4d84_silver_xl.jpeg" },
  { id: 8, name: "Sequin Angel Sleeve Maxi Dress", price: 40.00, originalPrice: 50, image: "/gzz63836_black_xl.webp" },


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