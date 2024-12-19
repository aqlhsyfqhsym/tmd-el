import React from "react";

interface PressReleaseProps {
    cards: {
        image: string;
        title: string;
        description: string;
    }[];
}

const Hero: React.FC<PressReleaseProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 gap-6 pb-10">
            {cards.map((card, index) => (
                <a
                    key={index}
                    className="grid sm:grid-cols-[auto,1fr] items-center gap-6 overflow-hidden rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="relative">
                        <img
                            src={card.image}
                            className="w-80 h-48 object-cover rounded-lg"
                            alt={card.title}
                        />
                        <div className="absolute bottom-2 left-2 bg-gradient-to-r from-[#00A99D] to-[#1172BA] text-white text-sm font-semibold px-4 py-2 rounded">
                            181 Days Ago
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-xl font-semibold text-[#1172BA]">{card.title}</h2>
                        <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                        <span className="text-[#1172BA] text-sm font-semibold mt-4 cursor-pointer hover:underline">
                            Learn More
                        </span>
                    </div>
                </a>
            ))}
        </div>

    );
};

export default Hero;
