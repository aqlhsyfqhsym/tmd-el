"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Slide {
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full mt-4"
      data-carousel="slide"
    >
      {/* Background Vector */}
      <div className="relative group">
        <div className="absolute -top-1 -left-1 z-10 duration-500">
          <Image
            src="/images/vector/vector-card-big.svg"
            width={800}
            height={610}
            priority
            alt="vector"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image
                src={slide.image}
                alt={slide.title}
                width={800}
                height={610}
                priority
                className="w-full h-56 sm:h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r to-transparent z-10 flex flex-col justify-end pl-10 mb-5 lg:mb-10 lg:pl-24 xl:pb-24 text-white lg:w-[37rem]">
                <h2
                  className="md:text-2xl font-bold mb-2 px-4"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h2>
                <p className="text-sm px-4">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-black/50"
            }`}
            aria-current={currentIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <div className="w-auto h-10">
          <Image
            src="/images/vector/right.svg"
            width={200}
            height={200}
            priority
            alt="previous"
            className="w-full h-full object-cover group-hover:hidden"
          />
          <Image
            src="/images/vector/right-hover.svg"
            width={200}
            height={200}
            priority
            alt="previous hover"
            className="w-full h-full object-cover hidden group-hover:block"
          />
        </div>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <div className="w-auto h-10">
          <Image
            src="/images/vector/left.svg"
            width={200}
            height={200}
            priority
            alt="next"
            className="w-full h-full object-cover group-hover:hidden"
          />
          <Image
            src="/images/vector/left-hover.svg"
            width={200}
            height={200}
            priority
            alt="next hover"
            className="w-full h-full object-cover hidden group-hover:block"
          />
        </div>
      </button>
    </div>
  );
};

export default Slider;
