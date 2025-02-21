import React from "react";
import Image from "next/image";

interface CommitteeMember {
  name: string;
  auditCommittee: {
    isChairman: boolean;
    isMember: boolean;
  };
  compensationCommittee: {
    isChairman: boolean;
    isMember: boolean;
  };
  nominatingCommittee: {
    isChairman: boolean;
    isMember: boolean;
  };
}

interface TableCommitteProps {
  data: {
    headers: string[];
    members: CommitteeMember[];
  };
}

export default function TableComitte({ data }: TableCommitteProps) {
  const { headers, members } = data;

  const renderIcons = (committee: { isChairman: boolean; isMember: boolean }) => (
    <div className="flex justify-center items-center gap-2">
      {committee.isChairman && (
        <Image 
          src="/images/about/chairman.svg" 
          alt="Chairman"
          width={24}
          height={24}
        />
      )}
      {committee.isMember && (
        <Image 
          src="/images/about/member.svg" 
          alt="Member"
          width={33}
          height={33}
        />
      )}
    </div>
  );

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full overflow-hidden border border-gray-300 rounded-xl">
        <thead>
          <tr className="bg-gradient-to-r from-teal-400 to-blue-500 text-white border-b border-gray-300">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {members.map((member, index) => (
            <tr key={index} className="border-b border-gray-300 last:border-b-0">
              <td className="px-4 py-4 font-medium text-black">{member.name}</td>
              <td className="px-4 py-4">{renderIcons(member.auditCommittee)}</td>
              <td className="px-4 py-4">{renderIcons(member.compensationCommittee)}</td>
              <td className="px-4 py-4">{renderIcons(member.nominatingCommittee)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Legend */}
      <div className="mt-4 flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/about/chairman.svg" 
            alt="Chairperson"
            width={24}
            height={24}
          />
          <span className="text-sm ms-4 text-black font-semibold">Chairperson</span>
        </div>
        <div className="flex items-center gap-2">
          <Image 
            src="/images/about/member.svg" 
            alt="Member"
            width={33}
            height={33}
          />
          <span className="text-sm ms-4 text-black font-semibold">Member</span>
        </div>
      </div>
    </div>
  );
}
