import React, { useState } from "react";
import './Slider.css';


const images = [
    "/pc.jpg",
    "/pc2.jpg",
    "/pc3.jpg",
  ];
  
  const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

  return (
    <div className="slider-container">
    <div className="slider">
      <img src={images[currentIndex]} alt="slide" className="slide-image" />
    </div>
    <div className="slider-navigation">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
  )
}

export default Slider
