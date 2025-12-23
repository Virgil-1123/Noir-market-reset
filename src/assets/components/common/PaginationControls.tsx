import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import './PaginationControls.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void; //點擊頁碼的回調函式
}

// 💡 修正 2：將您的組件命名為 PaginationControls，避免衝突
const PaginationControls: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // 💡 修正 1：將所有邏輯和渲染放在組件的函式體內
  if (totalPages <= 1) {
    return null;
  }

  const renderPaginationItems = () => {
    let items = [];

    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <BootstrapPagination.Item // 💡 使用重命名後的 Bootstrap 組件
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
      {" "}
      {/* 增加置中容器 */}
      <BootstrapPagination>
        {" "}
        {/* 💡 使用重命名後的 Bootstrap 組件 */}
        {renderPaginationItems()}
      </BootstrapPagination>
    </div>
  );
};

// 💡 修正 2：導出新的組件名稱
export default PaginationControls;
