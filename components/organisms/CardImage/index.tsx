"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface CardImageProps {
  cards: Card[];
}

export default function CardImage({ cards }: CardImageProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="flex gap-2  md:gap-6 h-[400px]">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="relative overflow-hidden rounded-lg h-full transition-all duration-700 ease-in-out"
          style={{
            width: hoveredId === card.id ? "60%" : hoveredId ? "20%" : "33.33%",
            flexShrink: 0
          }}
          onMouseEnter={() => setHoveredId(card.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50" />

            {hoveredId === card.id ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <h2 className="text-white text-3xl font-bold mb-4">{card.title}</h2>
                <p className="text-white text-lg leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ) : (
              !hoveredId && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h2 className="text-white text-2xl font-bold">{card.title}</h2>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
