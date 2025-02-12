interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    onItemsPerPageChange: (value: number) => void;
}

const Pagination = ({ 
    currentPage, 
    totalPages, 
    onPageChange,
    itemsPerPage,
    onItemsPerPageChange 
}: PaginationProps) => {
    return (
        <div className="flex items-center justify-end gap-2">
            <span className="text-sm text-gray-600">Items per page:</span>
            <select 
                className="border rounded px-2 py-1 text-sm"
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
            
            <div className="flex items-center ml-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => onPageChange(i + 1)}
                        className={`px-3 py-1 mx-1 rounded ${
                            currentPage === i + 1 
                                ? 'bg-blue-500 text-white' 
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;