import { type FC, useLayoutEffect, useRef } from "react";
import AboutUsBlock from "../../components/AboutUs/AboutUsBlock";
import BrandConcept from "../../components/AboutUs/BrandConcept";
import BrandConceptText from "../../components/AboutUs/BrandConceptText";
import Location from "../../components/AboutUs/Location";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutUsPageProps {}

const AboutUsPage: FC<AboutUsPageProps> = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 定義所有需要動畫的區塊
      const sections = [
        ".AboutUsBlock",
        ".BrandConcept",
        ".BrandConceptTextArea",
        ".LocationBlock",
      ];

      sections.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          // 你的漸進式想法：根據 index 增加延遲，或者改變進入方向
          x: index % 2 === 0 ? 100 : -100, // 左右交錯進入
          y: 30, // 稍微帶一點向上的漂浮感
          opacity: 0,
          duration: 1.2,
          ease: "power3.out", // 更優雅的減速曲線
          delay: index * 0.1, // 每個區塊之間的微小起始差
        });
      });

      // 針對 BrandConcept 內部的子元素（如文字行）做更細的 stagger
      gsap.from(".BrandConceptTextLine", {
        scrollTrigger: {
          trigger: ".BrandConceptTextLine",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.3, // 這就是你說的漸進感，文字一行一行浮現
        duration: 0.8,
        ease: "power2.out",
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  
  return (
    <div ref={mainRef} className="AboutUsArea" style={{ overflow: "hidden" }}>
      <AboutUsBlock />
      <>
        <BrandConcept />
        <BrandConceptText />
      </>
      <Location />
    </div>
  );
};

export default AboutUsPage;
