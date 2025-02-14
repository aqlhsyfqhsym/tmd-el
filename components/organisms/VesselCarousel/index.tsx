'use client';

import { useState } from 'react';
import Image from 'next/image';
import VesselInfo from '@/components/atoms/VesselInfo';
import vesselData from '@/data/vessel.json';

interface VesselData {
  id: number;
  name: string;
  capacity: string;
  pumpRate: string;
  image: string;
}

export default function VesselCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const vessels = vesselData.vessels;
  const currentVessel = vessels[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? vessels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === vessels.length - 1 ? 0 : prev + 1));
  };

  // Helper function to get next 7 vessels for thumbnails
  const getNextVessels = () => {
    const nextVessels = [];
    for (let i = 0; i < 7; i++) {
      const index = (currentIndex + i) % vessels.length;
      nextVessels.push({
        ...vessels[index],
        displayIndex: i
      });
    }
    return nextVessels;
  };

  return (
    <div>
      <VesselInfo
        tankerName={currentVessel.name}
        capacity={currentVessel.capacity}
        pumpRate={currentVessel.pumpRate}
      />
      
      <div className="relative">
        {/* Main Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={currentVessel.image}
            alt={currentVessel.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-0 bottom-0 w-[60px] flex items-center justify-center bg-gradient-to-r from-black/15 to-transparent hover:from-black/25 transition-all"
            aria-label="Previous vessel"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M15 19L8 12L15 5" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-0 bottom-0 w-[60px] flex items-center justify-center bg-gradient-to-l from-black/15 to-transparent hover:from-black/25 transition-all"
            aria-label="Next vessel"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 5L16 12L9 19" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Next Vessels Thumbnails */}
        <div className="mt-4 grid grid-cols-7 gap-2">
          {getNextVessels().map((vessel) => (
            <button
              key={`${vessel.id}-${vessel.displayIndex}`}
              onClick={() => setCurrentIndex(vessels.findIndex(v => v.id === vessel.id))}
              className="relative aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={vessel.image}
                alt={vessel.name}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}