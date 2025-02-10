interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Select = ({ options, value, onChange, className = '' }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-[280px] h-[42px] px-4 py-2 bg-white border border-gray-200 rounded-lg 
        text-gray-700 font-montserrat text-sm
        focus:outline-none focus:border-blue-500 
        appearance-none 
        bg-[url('/icons/chevron-down.svg')] bg-no-repeat 
        bg-[length:16px_16px] bg-[center_right_1rem]
        ${className}`}
    >
      {options.map((option) => (
        <option key={option} value={option} className="font-montserrat">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select; 