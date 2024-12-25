import React from "react";

interface HeroProps {
  heading: string;
  subheading: string;
  subheadingleft: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ heading, subheadingleft, subheading, image }) => {
  return (
    <div
      className="relative w-full h-[554px] bg-cover bg-bottom"
      style={{ backgroundImage: `url('${image}')` }}  >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 flex flex-col items-end justify-end h-full px-8 pb-8 text-white lg:mx-60">
        <div className="flex flex-row items-end justify-between w-full">
          <p className="text-xs font-normal text-left w-72">{subheadingleft}</p>
          <div className="flex flex-col text-right">
            <h1 className="text-xl md:text-2xl font-bold">{heading}</h1>
            <p className="mt-4 text-xs font-normal">{subheading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
