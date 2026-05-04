import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductGallery.css";

import { NewArrivalProducts } from "../../constants/Product";

function ProductGallery() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ProductGallery">
      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="MobileSwiper"
        >
          {NewArrivalProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={`ProductWrapper NewProduct${product.id}`} style={{ padding: '0 30px' }}>
                <Link to={`/shop/${product.id}`} className="ProductLink">
                  <img src={product.src} alt={product.alt} className="MainImage"/>
                  <img src={product.hoverSrc} alt={product.alt} className="HoverImage" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* 💻 桌面端：直接 map 出原始結構 */
        NewArrivalProducts.map((product) => (
          <div key={product.id} className={`ProductWrapper NewProduct${product.id}`}>
            <Link to={`/shop/${product.id}`} className="ProductLink">
              <img src={product.src} alt={product.alt} className="MainImage"/>
              <img src={product.hoverSrc} alt={product.alt} className="HoverImage" />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductGallery;