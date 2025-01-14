import React from "react";
import Image from "next/image";

interface DirectorCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  name,
  title,
  imageSrc,
}) => {
  return (
    <div className="relative group h-80 ">
      <div className="absolute -top-1 -left-1  z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <Image
          src="/images/vector/vector-card.svg"
          width={800}
          height={610}
          priority
          alt="vector"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-60 border-solid border border-black group h-80 rounded-lg overflow-hidden  bg-white">
        {/* Image */}
        <Image
          src={imageSrc}
          width={800}
          height={610}
          priority
          alt="Director"
          className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-contain"
        />

        {/* Content */}
        <div className="absolute bottom-0 bg-white text-white w-full p-5 transition-all duration-300 group-hover:bg-[linear-gradient(90deg,_#00A99D_0%,_#1172BA_100%)] border-t border-black">
        <h3 className="text-base text-black font-semibold">{name}</h3>

          {/* Hover Label */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-[max-height] duration-300 ease-in-out">
            <p className="mt-2 text-white bg-opacity-90 text-sm font-normal  rounded"   dangerouslySetInnerHTML={{
                __html: title,
              }}>
         
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
