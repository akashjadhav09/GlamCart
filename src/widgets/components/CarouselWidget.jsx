import React, { useState, useEffect } from "react";
import "../componentCss/CarouselWidgetCss.css";

const carouselData = [
  { 
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png", 
    text: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish."
  },
  { 
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png", 
    text: "Chanel Coco Noir Eau De",
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions."
  },
  { 
    image: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png", 
    text: "Gucci Bloom Eau de",
    description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1)}>❮</button>
      
      <div className="carousel-content">
        <img src={carouselData[currentIndex].image} alt="carousel slide" />
        <div className="carousel-detail-wrapper">
            <div className="text">{carouselData[currentIndex].text}</div>
            <div className="description">{carouselData[currentIndex].description}</div>
        </div>
      </div>

      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
