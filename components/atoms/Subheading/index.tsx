import React from 'react';

interface MainTitleProps {
    subheading: string;
 }

const MainTitle: React.FC<MainTitleProps> = ({ subheading }) => {
  return (
    <>
      <p className="text-gray-700 text-base">{subheading}</p>
      </>
  );
};

export default MainTitle;
