interface HeadingProps {
  heading: string;
  className?: string; // Optional className prop
}

const Heading = ({ heading, className = '' }: HeadingProps) => {
  return (
    <h2 className={`text-3xl font-inter font-extrabold text-[#1072BA] ${className}`}>
      {heading}
    </h2>
  );
};

export default Heading;
