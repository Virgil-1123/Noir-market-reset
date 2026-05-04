import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import './PaginationControls.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationControls: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const renderPaginationItems = () => {
    let items = [];

    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <BootstrapPagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </BootstrapPagination.Item>
      );
    }
    return items;
  };

  return (
    <div className="d-flex justify-content-center">
      <BootstrapPagination>
        {renderPaginationItems()}
      </BootstrapPagination>
    </div>
  );
};


export default PaginationControls;
