import React, { useCallback } from "react";
import "./ImageZoomer.css";

interface ImageZoomerProps {
  imageUrl: string;
  zoomSize?: number;
  scale?: number;
}

const ImageZoomer: React.FC<ImageZoomerProps> = ({
  imageUrl,
  zoomSize = 150,
  scale = 2,
}) => {
  // --- 狀態管理與 DOM 引用 ---
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  //放大鏡在主圖上的位置
  const [backgroundPosition, setBackgroundPosition] = React.useState({
    x: 0,
    y: 0,
  });
  //放大鏡背景圖片的定位
  const imageRef = React.useRef<HTMLImageElement>(null);
  //放大鏡區域的 DOM 引用
  const zoomRef = React.useRef<HTMLDivElement>(null);
  //放大鏡區域的 DOM 引用，主要用於設定樣式和定位

  // --- 事件處理：核心計算邏輯 ---
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!imageRef.current) return;

      const mouseX = e.nativeEvent.offsetX;
      const mouseY = e.nativeEvent.offsetY;
      //獲取滑鼠在圖片上的相對位置

      const targetWidth = imageRef.current.offsetWidth;
      const targetHeight = imageRef.current.offsetHeight;
      //獲取圖片的實際尺寸

      const zoomRectWidth = zoomSize;
      const zoomRectHeight = zoomSize;
      //放大鏡區域的尺寸，通常為正方形，根據傳入的 zoomSize 設定

      // 計算背景圖片定位
      let bgPosX = -(mouseX * scale - zoomRectWidth / 2);
      let bgPosY = -(mouseY * scale - zoomRectHeight / 2);
      //減去 zoomRectWidth / 2 的目的是為了補償放大鏡容器本身的半徑
      //因電腦預設的定為基準點皆為左上角所以要扣除放大鏡半徑讓背景圖片能夠正確對齊滑鼠位置

      // 限制背景圖片移動範圍
      const maxBgPosX = 0;
      const minBgPosX = -(targetWidth * scale - zoomRectWidth);
      //放大鏡可以移動的距離是由圖片的放大後尺寸減去放大鏡的尺寸決定的
      const maxBgPosY = 0;
      const minBgPosY = -(targetHeight * scale - zoomRectHeight);

      //放大鏡可以移動的距離是由圖片的放大後尺寸減去放大鏡的尺寸決定的

      bgPosX = Math.max(minBgPosX, Math.min(maxBgPosX, bgPosX));
      bgPosY = Math.max(minBgPosY, Math.min(maxBgPosY, bgPosY));
      //限制背景圖片的移動範圍，確保放大鏡不會顯示圖片之外的區域


      // 計算放大鏡本身定位
      let zoomAreaLeft = mouseX - zoomRectWidth / 2;
      let zoomAreaTop = mouseY - zoomRectHeight / 2;
      //放大鏡的定位同樣需要補償半徑，讓放大鏡能夠正確對齊滑鼠位置

      // 限制放大鏡移動範圍
      zoomAreaLeft = Math.max(0, zoomAreaLeft);
      zoomAreaLeft = Math.min(targetWidth - zoomRectWidth, zoomAreaLeft);
      zoomAreaTop = Math.max(0, zoomAreaTop);
      zoomAreaTop = Math.min(targetHeight - zoomRectHeight, zoomAreaTop);
      //限制放大鏡的移動範圍，確保放大鏡不會超出圖片的邊界

      // 更新狀態
      setPosition({ x: zoomAreaLeft, y: zoomAreaTop });
      setBackgroundPosition({ x: bgPosX, y: bgPosY });
    },
    [scale, zoomSize],
  );

  return (
    <div
      className="MainProductImgContainer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {/* 主圖 */}
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Product Main"
        className="MainProductImg"
      />

      {/* 放大鏡區域 */}
      {isVisible && (
        <div
          ref={zoomRef}
          className="ZoomArea"
          style={{
            position: "absolute",

            // 💡 尺寸和定位
            width: zoomSize,
            height: zoomSize,
            left: position.x,
            top: position.y,

            // 💡 背景圖片和縮放
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
            backgroundSize: `${imageRef.current ? imageRef.current.offsetWidth * scale : "auto"}px`,

            // 確保不會干擾滑鼠事件，且在最上層
            pointerEvents: "none",
            zIndex: 100,

            // 樣式美化 (可以移到 CSS 檔案)
            borderRadius: "50%",
            border: "2px solid #ccc",
            backgroundRepeat: "no-repeat",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        />
      )}
    </div>
  );
};

export default ImageZoomer;
