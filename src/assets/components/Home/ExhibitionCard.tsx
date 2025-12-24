import  { useState, useEffect } from "react";
import { Card, CardSubtitle } from "react-bootstrap";
import { Exhibitions } from "../../constants/Exhibition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import SectionBar from "./SectionBar";

import "./ExhibitionCard.css";
import "swiper/css";
import "swiper/css/pagination";

function ExhibitionCards() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const loopedExhibitions = Exhibitions.concat(Exhibitions);

  // 監聽 window resize，並手動更新 Swiper (解決 RWD 延遲問題)
  useEffect(() => {
    const handleResize = () => {
      if (swiperInstance) {
        // 強制 Swiper 重新計算尺寸和斷點
        swiperInstance.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiperInstance]);

  return (
    <div className="FullExhibitionContent">
      <SectionBar
        title="Exhibition"
        titleColor="white"
        lineColor1="white"
        lineColor2="black"
        dotColor="white"
      />
      <Swiper
        className="ExhibitionCardsWrapper"
        onSwiper={setSwiperInstance}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {loopedExhibitions.map((Exhibition, index) => (
          <SwiperSlide key={`${Exhibition.id}-${index}`}>
            <Card className="ExhibitionCards">
              <Card.Img
                variant="top"
                src={Exhibition.img}
                alt={Exhibition.title}
              />
              <Card.Body className="text-end">
                <Card.Title>{Exhibition.title}</Card.Title>
                <CardSubtitle>{Exhibition.subtitle}</CardSubtitle>
                <Card.Text>時間: {Exhibition.time}</Card.Text>
                <Card.Text>地點: {Exhibition.location}</Card.Text>
                <Card.Link href={"#"}>More &rarr;</Card.Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExhibitionCards;
