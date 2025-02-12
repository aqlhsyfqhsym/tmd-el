import React from 'react';
import Card from '@/components/atoms/CardGovernance';

interface Document {
  title: string;
  downloadUrl: string;
}

interface CardGridProps {
  documents: Document[];
}

export default function CardGrid({ documents }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {documents.map((doc, index) => (
        <Card
          key={index}   
          title={doc.title}
          downloadUrl={doc.downloadUrl}
        />
      ))}
    </div>
  );
}