interface HeadingSmallProps {
    title: string;
    className?: string;
}

const HeadingSmall = ({ title, className = "" }: HeadingSmallProps) => {
    return (
        <h2 className={`text-2xl font-bold text-[#2F2A64] mb-4 ${className}`}>
            {title}
        </h2>
    );
};

export default HeadingSmall;