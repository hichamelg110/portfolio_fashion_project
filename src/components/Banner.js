import React from 'react';

import ImageCarousel from './ImageCarousel';

const images = [
  {
    src: "/mother-daughter.jpg",
    title: "Discover Your Style",
    subtitle: "The newest styles for everyone in the family.",
    cta: { text: "EXPLORE", onClick: () => scrollToFeaturedProducts() }
  },
  
  {
    src: "/portrait-urban-bearded-male-dressed-black-stylish-winter-jacket.jpg",
    title: "Autumn Collection",
    subtitle: "Stay cool and stylish this season.",
    cta: { text: "EXPLORE", onClick: () => scrollToFeaturedProducts() }
  },
  {
    src: "/happy-lady-stylish-skirt-boater-posing-pink-wall.jpg",
    title: "Trendy Accessories",
    subtitle: "Complete your look with our latest accessories.",
    cta: { text: "EXPLORE", onClick: () => scrollToFeaturedProducts() }
  }
];

function Banner() {
  return (
    <div className="banner">
      <ImageCarousel images={images} />
    </div>
  );
}

function scrollToFeaturedProducts() {
  const featuredProductsElement = document.getElementById("featuredProducts");
  if (featuredProductsElement) {
    featuredProductsElement.scrollIntoView({ behavior: "smooth" });
  }
}

export default Banner;