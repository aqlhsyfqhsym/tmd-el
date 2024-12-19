import React from 'react';

interface MainTitleProps {
  heading: string;
 }

const MainTitle: React.FC<MainTitleProps> = ({ heading }) => {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-[#1072BA]">{heading}</h2>
     </>
  );
};

export default MainTitle;
