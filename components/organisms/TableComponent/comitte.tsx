import React from "react";

interface Committees {
  Committees: string; // Match property name from JSON
  Chairman: string;  // Match property name from JSON
  Member: string;    // Match property name from JSON
}

interface TableCommitteeProps {
  data: Committees[];
  left: string;
  center: string;
  right: string;
}

const TableCommittee: React.FC<TableCommitteeProps> = ({ data, left, center, right }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table-auto w-full overflow-hidden border-gray-900 rounded-xl">
        <thead className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left rounded-tl-xl">{left}</th>
            <th className="px-4 py-2 text-left">{center}</th>
            <th className="px-4 py-2 text-left rounded-tr-xl">{right}</th>
          </tr>
        </thead>
        <tbody className="bg-[#FEF8F8] border-l border-r border-gray-900">
          {data.map((committeesTable, index) => (
            <tr key={index} className="bg-[#FEF8F8] border-gray-900 border-b">
              <td className="px-4 py-2 text-sm text-black border-l border-gray-900 rounded-bl-xl">
                {committeesTable.Committees}
              </td>
              <td className="px-4 py-2 text-sm text-black border-gray-900">
                {committeesTable.Chairman}
              </td>
              <td className="px-4 py-2 text-sm text-black border-r border-gray-900 rounded-br-xl">
                {committeesTable.Member}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCommittee;
