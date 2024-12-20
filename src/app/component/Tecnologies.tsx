'use client'
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "../utils/data";

export const Technologies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-12 bg-[#0f0f0f] flex flex-col items-center mt-10">
      <h3 className="text-2xl font-semibold text-center mb-8 text-[#f2f2f2]">
        Tecnologias
      </h3>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-4 lg:px-0">
        <div className="relative max-w-[250px] lg:max-w-[450px] w-full mx-auto flex items-center">
          <div className="overflow-hidden w-full flex justify-center items-center rounded-lg">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full flex flex-col items-center bg-[#1e1e1e] shadow-lg rounded-lg p-4 md:p-6"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain mb-4"
                  />
                  <p className="text-sm md:text-lg font-medium text-[#f2f2f2] text-center break-words">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 bg-[#242424] p-2 sm:p-3 rounded-full ease-linear transition-all hover:bg-[#333] hover:scale-105 focus:outline-none transform -translate-y-1/2 top-1/2 z-10"
          >
            <ArrowLeft />
          </button>
  
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 bg-[#242424] p-2 sm:p-3 rounded-full ease-linear transition-all hover:bg-[#333] hover:scale-105 focus:outline-none transform -translate-y-1/2 top-1/2 z-10"
          >
            <ArrowRight />
          </button>
        </div>
  
        <div className="max-w-[400px] text-center lg:text-left">
          <h4 className="text-xl font-semibold text-[#f2f2f2] mb-4">
            {images[currentIndex].alt}
          </h4>
          <p className="text-md text-[#d1d1d1]">{images[currentIndex].description}</p>
        </div>
      </div>
  
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#f2f2f2]" : "bg-[#555]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
  

export default Technologies;