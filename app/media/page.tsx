'use client'
import React, { useState } from 'react';
import Hero from '@/components/organisms/Hero';
import Vector from "@/components/atoms/Vector";
import MediaData from "@/data/media.json";
import Heading from "@/components/atoms/Heading";
import PressRelease from '@/components/organisms/PressRelease';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function Media() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = MediaData.presscards.cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="max-w-none bg-[#FBFBFB]">
      <Hero
        heading={MediaData.hero.heading}
        subheading={MediaData.hero.subheading}
        subheadingleft={MediaData.hero.subheading}
        image={MediaData.hero.image}
      />
      <Vector />

      <div className="container mx-auto p-10 lg:px-48">
        <section className="py-4 md:py-8">
          <Heading heading={MediaData.pressrelease.title} />
        </section>

        <section>
          <PressRelease cards={currentCards} />
        </section>

        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            className="p-2 rounded bg-[#E5E7EB] hover:bg-gray-200"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
          </button>

          {[...Array(Math.ceil(MediaData.presscards.cards.length / cardsPerPage))].map((_, idx) => {
            if (
              idx === 0 ||
              idx === Math.ceil(MediaData.presscards.cards.length / cardsPerPage) - 1 ||
              (idx >= currentPage - 2 && idx <= currentPage + 2)
            ) {
              return (
                <button
                  key={idx + 1}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded ${currentPage === idx + 1
                    ? 'border-2 border-[#00A0B0] text-[#00A0B0]'
                    : 'bg-white border hover:bg-gray-50'
                    }`}
                >
                  {idx + 1}
                </button>
              );
            } else if (
              idx === currentPage - 3 ||
              idx === currentPage + 3
            ) {
              return <span key={idx} className="px-2">...</span>;
            }
            return null;
          })}

          <button
            className="p-2 rounded bg-[#E5E7EB] hover:bg-gray-200"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(MediaData.presscards.cards.length / cardsPerPage)))}
            disabled={currentPage === Math.ceil(MediaData.presscards.cards.length / cardsPerPage)}
          >
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}