"use client";

import React from 'react';

interface CardDescriptionProps {
    description: string;
    title: string;
    icon: string;
    backgroundImage: string;
    gradient: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ icon, title, description, backgroundImage, gradient }) => {
    return (
        <div
            className={`relative p-6 rounded-md shadow-lg text-black transition-transform duration-300 hover:scale-105 group`}
            style={{
                background: `${gradient}, url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "250px",
                width: "100%",
                transition: 'transform 0.3s ease, background 0.3s ease',
            }}
        >
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(rgba(0, 169, 157, 0.55), rgba(17, 114, 186, 0.55))' }}></div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="text-3xl">{icon}</div>
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">{title}</h3>
            </div>
            <p className="mt-4 text-sm transition-colors duration-300 group-hover:text-white relative z-10" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>{description}</p>
        </div>
    );
};

export default CardDescription;
