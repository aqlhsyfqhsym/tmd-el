import React from 'react';
import Image from 'next/image';

interface CardManagementProps {
  image: string;
  name: string;
  position: string;
  description: string;
}

export default function CardManagement({ image, name, position, description }: CardManagementProps) {
  return (
    <div className="relative border-b border-teal-400/30 pb-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full sm:w-full md:w-[500px] lg:w-[420px] mx-auto">
          <div className="relative">
            <div className="absolute -top-3 -left-3 z-10 hidden lg:block">
              <Image
                src="/images/bod/vector.png"
                alt="decoration"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            
            <div className="relative rounded-lg overflow-hidden border-[3px] border-black">
              <Image
                src={image}
                alt={name}
                width={500}
                height={625}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-black mb-1">{name}</h3>
            <p className="text-black font-medium mb-4">{position}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}