import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"; // 💡 移除 Row, Col
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { AllProducts } from "../../constants/Product";
import type { AllProduct } from "../../constants/Product";
import RelatedProductCard from "./RelatedProductCard";
import "./RelatedProducts.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface RelatedProductsProps {
  currentProductId: number;
  targetCategory: AllProduct["category"];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  targetCategory,
}) => {
  const [relatedItems, setRelatedItems] = useState<AllProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 💡 useEffect 實作篩選與**數據拼接**邏輯

  useEffect(() => {
    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      // 1. 篩選：找出所有同種類商品（不包含自身）
      const matchedItems = AllProducts.filter(
        (item) => item.category === targetCategory
      ).filter((item) => item.id !== currentProductId); // 2. 限制：只取前 4 個作為核心展示商品

      const coreItems = matchedItems.slice(0, 4);

      let finalItems = coreItems; // ---------------------------------------------------- // 數據拼接邏輯：確保有足夠的 Slide 實現無限輪播 // ----------------------------------------------------
      const MIN_FOR_LOOP = 8; // 假設 Swiper 需要至少 8 個 (4*2) Slide 來實現順暢輪播
      if (coreItems.length > 0 && coreItems.length < MIN_FOR_LOOP) {
        let tempItems = [...coreItems]; // 循環拼接，直到達到足夠的數量 (雖然 Swiper 會在內部處理，但這是預先準備數據的保險做法)
        while (tempItems.length < MIN_FOR_LOOP) {
          tempItems = tempItems.concat(coreItems);
        }
        finalItems = tempItems;
      } else if (coreItems.length === 0) {
        setRelatedItems([]);
        setIsLoading(false);
        return;
      }

      setRelatedItems(finalItems);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentProductId, targetCategory]);

  if (isLoading) {
    return <Container className="my-5 text-center">載入相關商品...</Container>;
  } 

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <Container className="RelatedProductsSection mt-5 mb-5">
      <h2>相關商品</h2>
      <Swiper 
        modules={[Navigation, A11y]} 
        loop={true} 
        navigation 
        breakpoints={{
          0: {
            slidesPerView: 2, // 手機顯示 2 個
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // 平板顯示 3 個
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4, // 桌面顯示 4 個
            spaceBetween: 30,
          },
        }}
        
      >
        {relatedItems.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <RelatedProductCard product={item} />
          </SwiperSlide>
        ))}

      </Swiper>
    </Container>
  );
};

export default RelatedProducts;
