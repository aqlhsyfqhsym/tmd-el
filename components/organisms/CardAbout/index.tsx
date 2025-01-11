import { color } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  text: string;
  link: string;
  description?: string;
}

interface CardAboutProps {
  cards: CardProps[];
}

export default function CardAbout({ cards }: CardAboutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <Link href={card.link} key={index} className="relative group">
          <div className="relative h-[300px] overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
            {/* Default state image */}
            <div className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <Image
                src={card.image}
                alt={card.text}
                fill
                className="object-cover"
              />
              {/* Dark blue overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: '#0F2764',
                  opacity: 0.8
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">{card.text}</h3>
              </div>
            </div>

            {/* Hover state */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <Image
                src={card.image}
                alt={`${card.text} hover`}
                fill
                className="object-cover"
              />
              {/* Light overlay on hover */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: '#FDFDFD',
                  opacity: 0.7,
                  backdropFilter: 'blur(2px)',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-6 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#272361' }}>{card.text}</h3>
                {card.description && (
                  <p className="text-black font-semibold text-sm">{card.description}</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
