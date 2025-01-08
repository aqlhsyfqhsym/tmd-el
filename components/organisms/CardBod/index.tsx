import Image from 'next/image';

interface CardBodProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

export default function CardBod({ name, position, description, image }: CardBodProps) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden border-2 border-gray-100 relative my-30 group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[45%] lg:w-[40%] relative">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="md:w-[55%] lg:w-[60%] p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-[2rem] font-bold text-gray-900 mb-1">{name}</h2>
            <h3 className="text-lg text-gray-600 mb-6">{position}</h3>
            <p className="text-gray-700 text-base leading-relaxed max-h-[310px] overflow-hidden transition-all duration-4000 ease-in-out group-hover:max-h-[1000px]">
              {description}
            </p>
          </div>
        </div>
      </div>

      <Image 
        src="/images/bod/line.png"
        alt="decorative bottom border"
        width={1910}
        height={6}
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  );
}
