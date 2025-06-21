import React, { useState, useEffect, useRef } from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { BsSkipStartCircle } from "react-icons/bs";

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
  const [isForward, setIsForward] = useState(true); 
  const intervalRef = useRef(null);

 
  useEffect(() => {
    clearInterval(intervalRef.current);

    if (currentIndex === carouselData.length - 1) {
      setIsForward(false);
    } else if (currentIndex === 0) {
      setIsForward(true);
    }

    intervalRef.current = setInterval(() => {
      if (isForward) {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 4000);

    return () => clearInterval(intervalRef.current);

  }, [currentIndex, isForward]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = ()=>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1);
  };

  const stopCarouselSlider = () => {
    setIsAutoPlay(prev => !prev);
    if(isAutoPlayOn){
      clearInterval(intervalRef.current);
    }else{
      intervalRef.current = setInterval(nextSlide, 4000);
    }
  };

  return (
    <div className="relative m-4 overflow-hidden border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300 max-h-[400px]" role="region" aria-label="Image carousel">
      <button
        onClick={stopCarouselSlider}
        className="p-2 m-2 absolute top-2 right-2 bg-sky-400 text-yellow-50 border border-gray-300 rounded-full shadow-lg hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-600 z-10"
        title={isAutoPlayOn ? "Stop Autoplay" : "Start Autoplay"}
      >
        {isAutoPlayOn ? <FaRegStopCircle size={24}/> : <BsSkipStartCircle size={24}/>}
        <span className="sr-only">{isAutoPlayOn ? "Stop autoplay" : "Start autoplay"}</span>
      </button>

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
          }}
          tabIndex={0}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center"
              aria-hidden={index !== currentIndex}
              role="group"
              aria-label={`Slide ${index + 1} of ${carouselData.length}`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-80 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-contain rounded-md transition-opacity duration-500 ease-in-out"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
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

      {/* Optional: indicators */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-sky-400' : 'bg-gray-300'}`
              + ` focus:outline-none focus:ring-2 focus:ring-sky-500`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentIndex}
          />
        ))}
      </div> */}
    </div>

  );
};

export default Carousel;


//next - prev button
  {/* <button
    onClick={nextSlide}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 transition"
    aria-label="Next Slide"
  > ❯ </button> */}


        
  {/* <button
    onClick={prevSlide}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 transition"
    aria-label="Previous Slide"
  > ❮ </button> */}


