import React from 'react';
import CardManagement from '@/components/atoms/CardManagement';
import Heading from '@/components/atoms/Heading';

interface ManagementMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface ManagementTeamProps {
  members: ManagementMember[];
}

export default function ManagementTeam({ members }: ManagementTeamProps) {
  return (
    <section className="py-4 md:py-8">
      <Heading heading="Senior Management Team" className="mb-11 text-black text-4xl" />
      <div className="space-y-8">
        {members.map((member, index) => (
          <CardManagement
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}