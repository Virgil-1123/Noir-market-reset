import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // 監聽目前的網址路徑 (pathname)
  const { pathname } = useLocation();

  useEffect(() => {
    // 當路徑變動時，將視窗捲動到最上方
    // 使用 "instant" 可以確保在畫面渲染前就定位，避免閃爍感
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null; // 這個組件不需要渲染任何內容
};

export default ScrollToTop;