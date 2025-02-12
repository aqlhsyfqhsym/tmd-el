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
      {/* Carousel wrapper */}
      <div className="relative group ">
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
      <div className="relative h-56 overflow-hidden rounded-2xl md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={800}
              height={610}
              priority
              className="absolute block w-full h-56 sm:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-r   to-transparent z-10 flex flex-col justify-end pl-10 pb-10 md:pl-24 md:pb-20 text-white">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 ">
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

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span> */}
        <div className="w-auto h-10">
        <Image
            src="/images/vector/right.svg"
            width={200}
            height={200}
            priority
            alt="vector"
            className="w-full h-full object-cover group-hover:hidden"
            />
                <Image
            src="/images/vector/right-hover.svg"
            width={200}
            height={200}
            priority
            alt="vector"
            className="w-full h-full object-cover hidden group-hover:block"
            />
            </div>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span> */}
          <div className="w-auto h-10">
        <Image
            src="/images/vector/left.svg"
            width={200}
            height={200}
            priority
            alt="vector"
            className="w-full h-full object-cover group-hover:hidden"
            />
                <Image
            src="/images/vector/left-hover.svg"
            width={200}
            height={200}
            priority
            alt="vector"
            className="w-full h-full object-cover hidden group-hover:block"
            />
            </div>
      </button>
    </div>
  );
};

export default Slider;
