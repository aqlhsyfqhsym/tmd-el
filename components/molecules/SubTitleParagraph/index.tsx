import React from 'react';

interface SubTitleProps {
  title: React.ReactNode;
  description: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ title, description }) => {
  return (
    <section className="py-4 md:py-8">
      <h2 className="text-2xl font-bold text-[#2F2A64] mb-4">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </section>
  );
};

export default SubTitle;
