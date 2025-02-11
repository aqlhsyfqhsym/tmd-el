import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

interface CardProps {
  title: string;
  downloadUrl: string;
}

export default function Card({ title, downloadUrl }: CardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_0px_rgba(0,0,0,0.08)] flex justify-between items-center hover:shadow-[0_4px_25px_0px_rgba(0,0,0,0.12)] transition-shadow">
      <span className={`text-gray-800 ${montserrat.className}`}>{title}</span>
      <a href={downloadUrl} download>
        <Image
          src="/images/investor/governance/download.svg" 
          alt="Download"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </a>
    </div>
  );
}
