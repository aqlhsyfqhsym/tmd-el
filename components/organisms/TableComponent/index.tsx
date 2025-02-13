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

const TableDirector: React.FC<TableDirectorProps> = ({ data, left, right }) => {
  return (
    <div className="overflow-x-auto mb-11">
      <table
        className="table-auto w-full"
        style={{
           border: "1px solid #000 !important",
           borderRadius: "40px !important"
        }}
      >
        {/* Table Header */}
        <thead className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left rounded-tl-xl">{left}</th>
            <th className="px-4 py-2 text-left rounded-tr-xl">{right}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-[#FEF8F8] ">
          {data.map((director, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-sm text-black">{director.name}</td>
              <td className="px-4 py-2 text-sm text-black">
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
