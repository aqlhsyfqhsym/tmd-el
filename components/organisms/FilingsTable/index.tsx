'use client'

import { useState, useMemo } from 'react';
import Select from '@/components/atoms/Select';
import Pagination from '@/components/atoms/FillingsPagination';
import FileDownload from '@/components/molecules/FileDownload';
import { Filing, FilingFilters } from '@/types/filing';

interface FilingsTableProps {
    filings: Filing[];
    filingTypes: string[];
    years: string[];
}

const FilingsTable = ({ filings, filingTypes, years }: FilingsTableProps) => {
    const [filters, setFilters] = useState<FilingFilters>({
        filingType: 'All Filing Type',
        year: 'All Years'
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);

    const filteredFilings = useMemo(() => {
        return filings.filter(filing => {
            const matchesType = filters.filingType === 'All Filing Type' || filing.filingType === filters.filingType;
            const matchesYear = filters.year === 'All Years' || filing.filingDate.includes(filters.year);
            return matchesType && matchesYear;
        });
    }, [filings, filters]);

    const paginatedFilings = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredFilings.slice(startIndex, endIndex);
    }, [filteredFilings, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredFilings.length / itemsPerPage);

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1); 
    };

    return (
        <div className="w-full sec-filings">
            <style jsx>{`
                .sec-filings {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>

            <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
                <div className="w-full sm:w-[calc(50%-1rem)]">
                    <Select
                        options={filingTypes}
                        value={filters.filingType}
                        onChange={(value) => setFilters(prev => ({ ...prev, filingType: value }))}
                        className="w-full"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-1rem)]">
                    <Select
                        options={years}
                        value={filters.year}
                        onChange={(value) => setFilters(prev => ({ ...prev, year: value }))}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-gradient-to-r from-teal-400 to-blue-500">
                        <tr>
                            <th className="p-4 text-left text-white font-medium">Filing Date</th>
                            <th className="p-4 text-left text-white font-medium">Filing Type</th>
                            <th className="p-4 text-left text-white font-medium">Description</th>
                            <th className="p-4 text-left text-white font-medium">Documents</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedFilings.map((filing, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 text-gray-700">{filing.filingDate}</td>
                                <td className="p-4 text-gray-700">{filing.filingType}</td>
                                <td className="p-4 text-gray-700">{filing.description}</td>
                                <td className="p-4">
                                    <FileDownload htmlUrl={filing.htmlUrl} pdfUrl={filing.pdfUrl} wordUrl={filing.wordUrl} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>
        </div>
    );
};

export default FilingsTable; 