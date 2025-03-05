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
      <table className="table-auto w-full overflow-hidden rounded-t-xl border border-[#000000]" style={{ borderCollapse: 'separate', borderSpacing: 0, borderWidth: '0.5px' }}>
        <thead>
          <tr className="bg-gradient-to-r from-[#00A99D] to-[#1172BA] text-white">
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-center"
                style={{ 
                  borderBottom: '0.5px solid #000000',
                  borderRight: index !== headers.length - 1 ? 'none' : undefined
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {members.map((member, index) => (
            <tr key={index}>
              <td className="px-4 py-4 font-medium text-black" style={{ borderBottom: index !== members.length - 1 ? '0.5px solid #000000' : 'none' }}>{member.name}</td>
              <td className="px-4 py-4" style={{ borderBottom: index !== members.length - 1 ? '0.5px solid #000000' : 'none' }}>{renderIcons(member.auditCommittee)}</td>
              <td className="px-4 py-4" style={{ borderBottom: index !== members.length - 1 ? '0.5px solid #000000' : 'none' }}>{renderIcons(member.compensationCommittee)}</td>
              <td className="px-4 py-4" style={{ borderBottom: index !== members.length - 1 ? '0.5px solid #000000' : 'none' }}>{renderIcons(member.nominatingCommittee)}</td>
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
