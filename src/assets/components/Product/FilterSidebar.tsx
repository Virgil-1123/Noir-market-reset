import React, { useState } from "react";
import {Offcanvas} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Form } from "react-bootstrap";
import {Collapse} from "react-bootstrap";
import {
  AVAILABLE_CATEGORIES,
  AVAILABLE_BANDS,
  PRICE_RANGES,
  AllProducts,
} from "../../constants/Product";

import "./FilterSidebar.css";

// 定義過濾狀態的形狀
export interface FilterState {
  categories: string[]; // 分類 (Checkbox 多選)
  bands: string[]; // 品牌 (Checkbox 多選)
  priceRange: string; // 價格區間 (Radio 單選)
}

interface FilterSidebarProps {
  currentFilter: FilterState; // 當前的過濾狀態
  onFilterChange: (newFilters: FilterState) => void; // 狀態改變的回調
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const [show, setShow] = useState(false); // 控制 Offcanvas 的開關
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 增加摺疊狀態 (讓桌面版側邊欄看起來更整潔，移動版可以略過)
  const [openCategories, setOpenCategories] = useState(true);
  const [openBands, setOpenBands] = useState(true);
  const [openPrices, setOpenPrices] = useState(true);

  // 處理多選框（分類或品牌）的改變
  const handleMultiSelectChange = (key: keyof FilterState, value: string) => {
    // 取得當前值 (必須是 string 陣列)
    const currentValues = currentFilter[key] as string[];
    let newValues;

    if (currentValues.includes(value)) {
      // 如果已存在，則移除
      newValues = currentValues.filter((v) => v !== value);
    } else {
      // 如果不存在，則添加
      newValues = [...currentValues, value];
    }

    // 將新值合併到新的過濾狀態中，並傳回父元件
    onFilterChange({
      ...currentFilter,
      [key]: newValues,
    });
  };

  // 處理價格區間（單選）的改變
  const handlePriceRangeChange = (value: string) => {
    // 點擊同一個選項則取消選擇，否則選擇新選項
    const newPriceRange = value === currentFilter.priceRange ? "" : value;

    onFilterChange({
      ...currentFilter,
      priceRange: newPriceRange,
    });
  };

  // 清除所有篩選
  const handleClear = () => {
    onFilterChange({ categories: [], bands: [], priceRange: "" });
  };

  // 計算當前選中的篩選條件總數
  const filterCount =
    currentFilter.categories.length +
    currentFilter.bands.length +
    (currentFilter.priceRange ? 1 : 0);

  return (
    <>
      {/* 觸發側邊欄的按鈕，通常用於移動裝置或彈出篩選 */}
      <Button
        variant="outline-dark"
        onClick={handleShow}
        className="d-lg-none filter-button"
      >
        篩選條件
        {filterCount > 0 && (
          <span className="filter-count"> ({filterCount})</span>
        )}
      </Button>

      {/* 側邊欄本體 (Offcanvas 適用於彈出式，你也可以使用純 div 適用於桌面固定側邊欄) */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>商品篩選</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {/* 清除篩選按鈕 (在側邊欄內方便清除) */}


          {/* 1. 分類篩選區塊 (Checkbox) */}
          <div className="filter-group mb-4">
            <h5
              onClick={() => setOpenCategories(!openCategories)}
              aria-controls="collapse-categories"
              aria-expanded={openCategories}
              className="filter-heading" // 加上 CSS class 讓它像個按鈕
            >
              商品分類{" "}
              <span className="collapse-icon">
                {openCategories ? "▲" : "▼"}
              </span>
            </h5>
            <Collapse in={openCategories}>
              <div id="collapse-categories">
                <Form>
                  {AVAILABLE_CATEGORIES.map((category) => (
                    <Form.Check
                      type="checkbox"
                      id={`check-cat-${category}`}
                      key={category}
                      label={`${category} (${
                        AllProducts.filter((p) => p.category === category)
                          .length
                      })`}
                      checked={currentFilter.categories.includes(category)}
                      onChange={() =>
                        handleMultiSelectChange("categories", category)
                      }
                    />
                  ))}
                </Form>
              </div>
            </Collapse>
          </div>

          <hr />

          {/* 2. 品牌篩選區塊 (Checkbox) */}
          <div className="filter-group mb-4">
            <h5
              onClick={() => setOpenBands(!openBands)}
              aria-controls="collapse-bands"
              aria-expanded={openBands}
              className="filter-heading"
            >
              品牌 (Band){" "}
              <span className="collapse-icon">{openBands ? "▲" : "▼"}</span>
            </h5>
            <Collapse in={openBands}>
              <div id="collapse-bands">
                <Form>
                  {AVAILABLE_BANDS.map((band) => (
                    <Form.Check
                      type="checkbox"
                      id={`check-band-${band}`}
                      key={band}
                      label={`${band} (${
                        AllProducts.filter((p) => p.Band === band).length
                      })`}
                      checked={currentFilter.bands.includes(band)}
                      onChange={() => handleMultiSelectChange("bands", band)}
                    />
                  ))}
                </Form>
              </div>
            </Collapse>
          </div>

          <hr />

          {/* 3. 價格區間篩選區塊 (Radio) */}
          <div className="filter-group mb-4">
            <h5
              onClick={() => setOpenPrices(!openPrices)}
              aria-controls="collapse-prices"
              aria-expanded={openPrices}
              className="filter-heading"
            >
              價格區間{" "}
              <span className="collapse-icon">{openPrices ? "▲" : "▼"}</span>
            </h5>
            <Collapse in={openPrices}>
              <div id="collapse-prices">
                <Form>
                  {PRICE_RANGES.map((range) => (
                    <Form.Check
                      type="radio" // 使用單選
                      name="priceRangeGroup"
                      id={`radio-price-${range.value}`}
                      key={range.value}
                      label={range.label}
                      checked={currentFilter.priceRange === range.value}
                      onChange={() => handlePriceRangeChange(range.value)}
                    />
                  ))}
                </Form>
              </div>
            </Collapse>
          </div>

                    <Button
            variant="outline-secondary"
            onClick={handleClear}
            className="w-100 mb-4"
          >
            清除所有篩選 ({filterCount})
          </Button>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterSidebar;
