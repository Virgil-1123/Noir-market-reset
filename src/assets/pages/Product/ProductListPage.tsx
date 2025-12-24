import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductBanner from "../../components/Product/ProductBanner";
import SortDropDown from "../../components/Product/SortDropdown";
import FilterSidebar, {
  type FilterState,
} from "../../components/Product/FilterSidebar";
import ProductCard from "../../components/Product/ProductCard";
import PaginationControls from "../../components/common/PaginationControls";
import { AllProducts } from "../../constants/Product";
import type { AllProduct } from "../../constants/Product";

//分頁配置
const ITEMS_PER_PAGE = 9;

//時間排序
const INITIAL_SORT = "time_desc"; // 預設：依時間由新到舊

//Filter預設值
const INITIAL_FILTER: FilterState = {
  categories: [],
  bands: [],
  priceRange: "",
};

const ProductListPage: React.FC = () => {
  //1.排序狀態
  const [currentSort, setCurrentSort] = useState(INITIAL_SORT);

  //2.過濾狀態
  const [filterState, setFilterState] = useState<FilterState>(INITIAL_FILTER);

  //3.分頁狀態
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (newSort: string) => setCurrentSort(newSort);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilterState(newFilters);
    setCurrentPage(1); //條件變更頁碼設置為1
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result: AllProduct[] = [...AllProducts];

    //執行篩選

    result = result.filter((product) => {
      const categoryMatch =
        filterState.categories.length === 0 ||
        filterState.categories.includes(product.category);
      const bandMatch =
        filterState.bands.length === 0 ||
        filterState.bands.includes(product.Band);

      return categoryMatch && bandMatch;
    });

    //價格區篩選
    if (filterState.priceRange) {
      const [minStr, maxStr] = filterState.priceRange.split("-");
      const min = parseInt(minStr);
      const max = maxStr === "max" ? Infinity : parseInt(maxStr);

      result = result.filter((product) => {
        return product.price >= min && product.price <= max;
      });
    }

    //排序
    result.sort((a, b) => {
      switch (currentSort) {
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "time_asc":
          return (
            new Date(a.releasedAt).getTime() - new Date(b.releasedAt).getTime()
          );
        case "time_desc":
          return (
            new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
          );
        default:
          return 0;
      }
    });

    return result;
  }, [currentSort, filterState]);

  //計算分頁數據
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  //分頁邏輯
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [currentPage, filteredAndSortedProducts]); //依賴頁碼過濾/排序後的結果

  return (
    <>
      <ProductBanner />
      <Container className="my-5">
        <Row>
          <Col lg={3} className="d-none d-lg-block">
            <FilterSidebar
              currentFilter={filterState}
              onFilterChange={handleFilterChange}
            />
          </Col>

          <Col xs={12} lg={9}>
            <div className="d-flex justify-content-end align-items-center mb-4">
              <div className="d-lg-none">
                <FilterSidebar
                  currentFilter={filterState}
                  onFilterChange={handleFilterChange}
                />
              </div>
              {/* 排序下拉選單 (Sort Dropdown) */}
              <SortDropDown
                currentSort={currentSort}
                onSortChange={handleSortChange}
              />
            </div>

            {/* 商品卡片列表 (Grid 網格排版) */}
            <Row xs={1} md={2} lg={3} className="g-4">
              {paginatedProducts.map((product) => (
                <Col key={product.id}>
                  <ProductCard
                    product={product}
                  />
                </Col>
              ))}
            </Row>

            {/* 無結果提示 */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-5">
                <p>根據您選擇的篩選條件，沒有找到相符的商品。</p>
              </div>
            )}

            <div className="mt-5">
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
