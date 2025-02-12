import React from 'react';
import CardGrid from '@/components/molecules/CardGrid';

interface GovernanceDocumentsProps {
  documents: {
    title: string;
    downloadUrl: string;
  }[];
}

export default function GovernanceDocuments({ documents }: GovernanceDocumentsProps) {
  return (
    <div className="space-y-6">
      <CardGrid documents={documents} />
    </div>
  );
}