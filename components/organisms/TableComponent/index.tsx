import React from "react";

interface Director {
  name: string;
  position: string;
  position2?: string;
  
}

interface TableDirectorProps {
  data: Director[];
  left: string;  
  right: string;
}

const TableDirector: React.FC<TableDirectorProps> = ({ data,left, right }) => {
  return (
    <div className="overflow-x-auto mb-11">
<table className="table-auto w-full overflow-hidden border-gray-900 rounded-xl">
<thead className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
    <tr>
      <th className="px-4 py-2 text-left rounded-tl-xl">
        {left}
      </th>
      <th className="px-4 py-2 text-left rounded-tr-xl">
        {right}
      </th>
      
    </tr>
  </thead>
  <tbody className="bg-[#FEF8F8]  border-l border-r border border-gray-900 rounded-xl">
    {data.map((director, index) => (
      <tr
        key={index}
        className={`bg-[#FEF8F8] border-gray-900 border  ${
          index === data.length - 1 ? "" : ""
        }`}
      >
        <td className="px-4 py-2 text-sm rounded-bl-xl  text-black border-gray-900">
          {director.name}
        </td>
        <td className="px-4 py-2 text-sm  rounded-br-xl text-black border-gray-900">
          {director.position}
        </td>
      
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default TableDirector;
