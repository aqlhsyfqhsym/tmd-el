import React from "react";
import Image from "next/image";

interface CareerProps {
  careers: {
    image: string;
    title: string;
    description: string;
    jobType: string;
    location: string;
  }[];
}

const CareerCard: React.FC<CareerProps> = ({ careers }) => {
  return (
    <div className="grid grid-cols-1 gap-6 pb-10">
      {careers.map((career, index) => (
        <div key={index} className="relative py-2">
       
          <Image
            src={career.image}
            alt={career.title}
            width={800}
            height={610}
            priority
            className="w-full object-cover rounded-lg mb-4"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#2F2A64" }}
              >
                {career.title}
              </h2>
              <p className="text-gray-700 mb-4">{career.description}</p>
              <div className="flex space-x-4 mb-4">
                <button className="border border-teal-500 text-black px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition flex-1">
                  {career.jobType}
                </button>
                <button className="border border-teal-500 text-black px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition flex-1">
                  {career.location}
                </button>
              </div>
            </div>
            <div className="col-span-4 flex items-start justify-end">
              <a
                href="#"
                className="text-black text-1xl font-bold hover:underline"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerCard;
