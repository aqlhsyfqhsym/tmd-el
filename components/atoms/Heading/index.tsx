interface HeadingProps {
  heading: string;
  className?: string; // Optional className prop
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
  return (
    <h2 className={`text-3xl font-extrabold text-[#1072BA] ${className}`}>
      {heading}
    </h2>
  );
};

export default Heading;
