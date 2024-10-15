import React from 'react';

import ImageCarousel from './ImageCarousel';

const images = [
  {
    src: "/mother-daughter.jpg",
    title: "Discover Your Style",
    subtitle: "The newest styles for everyone in the family.",
    cta: { text: "DISCOVER ", onClick: () => console.log("CTA clicked") }
  },
  
  {
    src: "/portrait-urban-bearded-male-dressed-black-stylish-winter-jacket.jpg",
    title: "Autumn Collection",
    subtitle: "Stay cool and stylish this season.",
    cta: { text: "SHOP NOW", onClick: () => console.log("Summer CTA clicked") }
  },
  {
    src: "/happy-lady-stylish-skirt-boater-posing-pink-wall.jpg",
    title: "Trendy Accessories",
    subtitle: "Complete your look with our latest accessories.",
    cta: { text: "EXPLORE", onClick: () => console.log("Accessories CTA clicked") }
  }
];

function Banner() {
  return (
    <div className="banner">
      <ImageCarousel images={images} />
    </div>
  );
}

export default Banner;