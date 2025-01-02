import React from "react";

interface CardProps {
  cards: {
    image: string;
    text: string;
    link: string; 
  }[];
}

const DynamicImageCard: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10">
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.link} 
          className="relative overflow-hidden rounded-lg shadow-lg"
          target="_blank"
          rel="noopener noreferrer" 
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
