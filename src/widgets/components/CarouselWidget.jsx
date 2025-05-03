import React, { useState, useEffect, useRef } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { BsSkipStartCircle } from "react-icons/bs";

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
  const [isAutoPlayOn, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopCarouselSlider = () => {
    setIsAutoPlay(prev => !prev);
    if(isAutoPlayOn){
      clearInterval(intervalRef.current);
    }else{
      intervalRef.current = setInterval(nextSlide, 4000);
    }
  };

  return (
    <div className="relative m-4 overflow-hidden border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300 max-h-[400px]">      
      <button 
        onClick={stopCarouselSlider}
        className="bg-sky-400 text-yellow-50 border border-gray-300 p-1 m-1 absolute right-0 z-10 rounded"
        title={isAutoPlayOn ? "Stop Autoplay" : "Start Autoplay"}
      >
        {isAutoPlayOn ? <FaRegStopCircle /> : <BsSkipStartCircle />}
      </button>

      
      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? carouselData.length - 1 : prev - 1
          )
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 transition"
        aria-label="Previous Slide"
      > ❮ </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center"
            >
              <img
                src={item.image}
                alt="carousel slide"
                className="w-1/2 h-1/2 object-contain transition-opacity duration-500 ease-in-out"
              />
              <div className="p-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {item.text}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 transition"
        aria-label="Next Slide"
      > ❯ </button>
    </div>
  );
};

export default Carousel;


  // <div className="carousel">
  //   <button className="prev" onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1)}>❮</button>

  //   <div className="carousel-content">
  //     <img src={carouselData[currentIndex].image} alt="carousel slide" />
  //     <div className="carousel-detail-wrapper">
  //       <div className="text">{carouselData[currentIndex].text}</div>
  //       <div className="description">{carouselData[currentIndex].description}</div>
  //     </div>
  //   </div>

  //   <button className="next" onClick={nextSlide}>❯</button>
  // </div>