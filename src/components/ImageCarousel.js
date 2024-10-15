import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const imageCarouselStyles = {
  container: {
    position: 'relative', 
    width: '100%',
    height: '748px', 
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: '50% 16%',
  },
};

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // after 5sec image change

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={imageCarouselStyles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            ...imageCarouselStyles.image,
            backgroundImage: `url(${image.src})`,
          }}
        >
          <div className="carousel-content">
            <h2>{image.title}</h2>
            <p>{image.subtitle}</p>
            {image.cta && (
              <button className="cta-button" onClick={image.cta.onClick}>
                {image.cta.text}
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
