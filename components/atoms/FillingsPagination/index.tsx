interface PaginationItemProps {
    active?: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }
  
  const PaginationItem = ({ active, onClick, children }: PaginationItemProps) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 mx-1 rounded ${
        active 
          ? 'bg-blue-500 text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
  
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex items-center justify-end gap-2">
        <span className="text-sm text-gray-600">Items per page:</span>
        <select 
          className="border rounded px-2 py-1 text-sm"
          defaultValue="25"
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        
        <div className="flex items-center ml-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem
              key={i + 1}
              active={currentPage === i + 1}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </PaginationItem>
          ))}
        </div>
      </div>
    );
  };
  
  export default Pagination;