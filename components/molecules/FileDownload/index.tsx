import Image from 'next/image';

interface FileDownloadProps {
  pdfUrl?: string;
  wordUrl?: string;
  htmlUrl?: string;
}

const FileDownload = ({ htmlUrl,pdfUrl, wordUrl }: FileDownloadProps) => {
  return (
    <div className="flex gap-2">
        {htmlUrl && (
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image src="/icons/html.svg" alt="HTML" width={24} height={24} />
        </a>
      )}
      {pdfUrl && (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image src="/icons/pdf.svg" alt="PDF" width={24} height={24} />
        </a>
      )}
      {wordUrl && (
        <a href={wordUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image src="/icons/word.svg" alt="Word" width={24} height={24} />
        </a>
      )}
    </div>
  );
};

export default FileDownload; 