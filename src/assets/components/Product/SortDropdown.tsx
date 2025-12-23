import React from "react";
import { Dropdown } from "react-bootstrap";
import "./SortDropdown.css";

interface SortDropDownProps {
  currentSort: string;
  onSortChange: (newSort: string) => void;
}

const SORT_OPTIONS = [
  { key: "time_desc", label: "最新發布 (時間降序)" },
  { key: "time_asc", label: "最舊發布 (時間升序)" },
  { key: "price_desc", label: "價格由高至低" },
  { key: "price_asc", label: "價格由低至高" },
];

const SortDropDown: React.FC<SortDropDownProps> = ({
  currentSort,
  onSortChange,
}) => {
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.key === currentSort)?.label || "請選擇";

  return (
    <div className="SortDropDownContainer">
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="SortToggle"
        >
          {currentLabel}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {SORT_OPTIONS.map((option) => (
            <Dropdown.Item
              key={option.key}
              onClick={() => onSortChange(option.key)}
              active={option.key === currentSort}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortDropDown;
