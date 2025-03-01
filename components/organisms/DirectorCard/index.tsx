"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

interface DirectorCardProps {
  name: string;
  title: string;
  imageSrc: string;
  imageSrcFull: string;
  description: string;
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  name,
  title,
  imageSrc,
  imageSrcFull,
  description,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative group h-80 " onClick={() => setModalOpen(true)}>
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
          <Image
            src={imageSrc}
            width={800}
            height={610}
            priority
            alt="Director"
            className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-contain"
          />

          <div className="absolute bottom-0 bg-white text-white w-full p-5 transition-all duration-300 group-hover:bg-[linear-gradient(90deg,_#00A99D_0%,_#1172BA_100%)] border-t border-black">
            <h3 className="text-base text-black font-semibold">{name}</h3>

            <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-[max-height] duration-300 ease-in-out">
              <p
                className="mt-2 text-white bg-opacity-90 text-sm font-normal  rounded"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      {/* modal section */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 py-8">
          <div className="bg-white rounded-2xl shadow-lg h-full w-2/3 m-20 relative animate-fadeIn overflow-auto ">
            <button
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-black"
              onClick={() => setModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
              >
                <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row pr-10 gap-2">
              <Image
                src={imageSrcFull}
                width={800}
                height={510}
                alt={name}
                priority
                className=" w-100 h-auto object-contain"
              />
              <div className="flex flex-col w-full py-20">
                <h2 className="text-xl font-bold bg-gradient-to-b from-[#00A99D] to-[#1172BA] bg-clip-text text-transparent">
                  {name}
                </h2>
                <p
                  className="mt-2 text-gray-700 w-full"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></p>
                <p
                  className="mt-2 text-gray-700 w-full"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
            </div>

            <div className="relative">
              {/* <svg
                width="1000"
                height="10"
                viewBox="0 0 1000 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M508.474 9.99847H1000V0H519.26L508.474 9.99847Z"
                  fill="#282162"
                />
                <path
                  d="M0 0H508.475L497.689 9.99847H0V0Z"
                  fill="url(#paint0_linear_1322_4749)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1322_4749"
                    x1="0"
                    y1="4.99681"
                    x2="508.475"
                    y2="4.99681"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00A99D" />
                    <stop offset="1" stop-color="#1172BA" />
                  </linearGradient>
                </defs>
              </svg> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectorCard;
