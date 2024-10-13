import React from 'react';

import ImageCarousel from './ImageCarousel';

const images = [
  {
    src: "/wp7030283-fashion-girl-wallpapers.jpg",
    title: "Discover Your Style",
    subtitle: "The newest styles for everyone in the family.",
    cta: { text: "DISCOVER ", onClick: () => console.log("CTA clicked") }
  },
  
  {
    src: "/f97b17c165a877e1411f1e87d46b9d4b.jpg",
    title: "Autumn Collection",
    subtitle: "Stay cool and stylish this season.",
    cta: { text: "SHOP NOW", onClick: () => console.log("Summer CTA clicked") }
  },
  {
    src: "/lake-mountains.jpg",
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