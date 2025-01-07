import React from 'react';

interface SubTitleOrderLineProps {
    title: string;
    services: { heading: string; description: string }[];
    details: string[];
}

const SubTitleOrderLine: React.FC<SubTitleOrderLineProps> = ({ title, services, details }) => {
    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold text-[#2F2A64] mb-6">{title}</h2>
            <ol className="list-decimal pl-6 mb-14 [&>li::marker]:font-bold [&>li::marker]:text-black">
                {services.map((service, index) => (
                    <li key={index} className="mb-4">
                        <span className="font-bold text-black">{service.heading}</span>: <br />
                        <span className="text-gray-700 ">{service.description}</span>
                    </li>
                ))}
            </ol>
            {details.map((detail, index) => (
                <p key={index} className="text-gray-700 text-base mb-4">
                        {detail}
                    </p>
                ))}
        </section>
    );
};

export default SubTitleOrderLine;
