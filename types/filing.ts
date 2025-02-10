export interface Filing {
  filingDate: string;
  filingType: string;
  description: string;
  pdfUrl?: string;
  wordUrl?: string;
  htmlUrl?: string;
}

export interface FilingFilters {
  filingType: string;
  year: string;
} 