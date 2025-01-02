import React from "react";

interface CardProps {
  cards: {
    image: string;
    text: string;
    link: string; // Add a link property
  }[];
}

const DynamicImageCard: React.FC<CardProps> = ({ cards }) => {
  return (
<div  className={`grid gap-6 pb-10 ${
    cards.length === 1
      ? "grid-cols-1"
      : cards.length === 2
      ? "grid-cols-2"
      : cards.length === 3
      ? "grid-cols-3"
      : "grid-cols-4" // Default to 4 cards per row for 4 or more cards
  }`}
>
{cards.map((card, index) => (
        <a
          key={index}
          href={card.link} // Use the dynamic link
          className="relative overflow-hidden rounded-lg shadow-lg"
          target="_blank"
          rel="noopener noreferrer" // Open links in a new tab safely
        >
          <img
            src={card.image}
            alt={card.text}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <p className="text-white text-base font-medium">{card.text}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DynamicImageCard;
