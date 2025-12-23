import React, { type FC, useLayoutEffect, useRef } from "react";
import Banner from "../../components/Home/Banner";
import NewArrival from "../../components/Home/NewArrival";
import TheMarketPlace from "../../components/Home/TheMarketPlace";
import ExhibitionCards from "../../components/Home/ExhibitionCard";
import AboutContentBlock from "../../components/Home/AboutContentBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 註冊外掛
gsap.registerPlugin(ScrollTrigger);

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  // 建立一個 ref 來抓取整個首頁容器，方便 GSAP 管理作用域
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 使用 gsap.context 可以確保組件卸載時，所有的動畫和 ScrollTrigger 都會被自動清除
    const ctx = gsap.context(() => {
      // --- Banner 動畫開始 ---

      // 假設你的 Banner 內部有標籤帶有 class "banner-title"
      // 我們讓它從下方 60px 處淡入，並帶有優雅的 Power3 曲線
      gsap.from(".BannerText", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // 讓 FirstText 和 SecondText 有先後跳出的感覺
        ease: "power3.out",
        delay: 0.5, // 等待頁面載入後的緩衝
      });

      // 如果你想讓 Banner 的背景圖也有一個緩慢放大的進場效果
      gsap.from(".BannerBox", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out",
      });

      // --- NewArrival 捲動觸發動畫 ---
      // 假設 NewArrival 組件的最外層容器 className 是 "new-arrival-section"
      gsap.from(".NewArrivalArea > * ", {
        scrollTrigger: {
          trigger: ".NewArrivalArea", // 觸發動畫的元素
          start: "top 85%", // 當元素頂部到達視窗 85% 位置時開始
          toggleActions: "play none none reverse", // 往回捲時會反向播放，讓動畫可以重複觸發
        },
        x: 150, // 從右側 100px 處開始
        opacity: 0, // 從透明開始
        duration: 1, // 動畫時長 1 秒
        stagger: 0.2, // 💡 關鍵：讓內容一個接一個滑入，這時候 x: 100 就會非常明顯且流暢
        ease: "power2.out", // 平滑的減速曲線
      });

      gsap.from(".TheMarketArea > *", {
        scrollTrigger: {
          trigger: ".TheMarketArea",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        x: -150,
        opacity: 0,
        duration: 1, // 建議增加持續時間，讓動畫更滑順
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".FullExhibitionContent > *", {
        scrollTrigger: {
          trigger: ".FullExhibitionContent",
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
        x: 150,
        opacity: 0,
        duration: 1, // 建議增加持續時間，讓動畫更滑順
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".AboutTopPic", {
        scrollTrigger: {
          trigger: ".AboutTopBoard",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // 2. 上半部右側：文字與小圖的交錯感
      // 我們選取 AboutRightBoard 下的所有子層
      gsap.from(".AboutRightBoard > *", {
        scrollTrigger: {
          trigger: ".AboutRightBoard",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.4, // 讓文字先出，小圖後出
        ease: "power3.out",
      });

      // 3. 下半部橫幅大圖：縮放揭幕效果
      gsap.from(".AboutLocationPic img", {
        scrollTrigger: {
          trigger: ".AboutLocationPic",
          start: "top 90%",
          
        },
        scale: 1.2, // 圖片從 1.2 倍縮小回 1 倍
        opacity: 0,
        duration: 2, // 慢動作顯得有質感
        ease: "power2.out",
      });

      
    }, mainRef); // 作用域限制在 mainRef 內

    return () => ctx.revert(); // 清理動畫，避免記憶體洩漏
  }, []);

  return (
    <div ref={mainRef} style={{ overflow: "hidden" }}>
      <Banner FirstText="Wear Your Free" SecondText="穿出你的本質" />
      <NewArrival />
      <TheMarketPlace />
      <ExhibitionCards />
      <AboutContentBlock />
    </div>
  );
};

export default HomePage;
