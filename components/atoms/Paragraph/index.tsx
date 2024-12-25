import React from 'react';

interface ParagraphProps {
  description: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ description }) => {
  return (
    <section className="md:py-8">
      <p className="text-gray-700 text-base">{description}</p>
    </section>
  );
};

export default Paragraph;
