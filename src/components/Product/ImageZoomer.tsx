import React, { useCallback } from 'react';
import './ImageZoomer.css'; 

interface ImageZoomerProps {
  imageUrl: string;
  zoomSize?: number; 
  scale?: number; 
}

const ImageZoomer: React.FC<ImageZoomerProps> = ({ 
  imageUrl, 
  zoomSize = 150, 
  scale = 2 
}) => {
  // --- 狀態管理與 DOM 引用 ---
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 }); 
  const [backgroundPosition, setBackgroundPosition] = React.useState({ x: 0, y: 0 }); 

  const imageRef = React.useRef<HTMLImageElement>(null);
  const zoomRef = React.useRef<HTMLDivElement>(null); 

  // --- 事件處理：核心計算邏輯 ---
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    const targetWidth = imageRef.current.offsetWidth;
    const targetHeight = imageRef.current.offsetHeight;
    const zoomRectWidth = zoomSize;
    const zoomRectHeight = zoomSize;

    // 計算背景圖片定位
    let bgPosX = -(mouseX * scale - zoomRectWidth / 2);
    let bgPosY = -(mouseY * scale - zoomRectHeight / 2);

    // 限制背景圖片移動範圍
    const maxBgPosX = 0;
    const minBgPosX = -(targetWidth * scale - zoomRectWidth);
    const maxBgPosY = 0;
    const minBgPosY = -(targetHeight * scale - zoomRectHeight);

    bgPosX = Math.max(minBgPosX, Math.min(maxBgPosX, bgPosX));
    bgPosY = Math.max(minBgPosY, Math.min(maxBgPosY, bgPosY));


    // 計算放大鏡本身定位
    let zoomAreaLeft = mouseX - zoomRectWidth / 2;
    let zoomAreaTop = mouseY - zoomRectHeight / 2;

    // 限制放大鏡移動範圍
    zoomAreaLeft = Math.max(0, zoomAreaLeft);
    zoomAreaLeft = Math.min(targetWidth - zoomRectWidth, zoomAreaLeft);
    zoomAreaTop = Math.max(0, zoomAreaTop);
    zoomAreaTop = Math.min(targetHeight - zoomRectHeight, zoomAreaTop);

    // 更新狀態
    setPosition({ x: zoomAreaLeft, y: zoomAreaTop });
    setBackgroundPosition({ x: bgPosX, y: bgPosY });

  }, [scale, zoomSize]);


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
            position: 'absolute',
            
            // 💡 尺寸和定位
            width: zoomSize,
            height: zoomSize,
            left: position.x,
            top: position.y,
            
            // 💡 背景圖片和縮放
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
            backgroundSize: `${imageRef.current ? imageRef.current.offsetWidth * scale : 'auto'}px`,
            
            // 確保不會干擾滑鼠事件，且在最上層
            pointerEvents: 'none', 
            zIndex: 100,

            // 樣式美化 (可以移到 CSS 檔案)
            borderRadius: '50%',
            border: '2px solid #ccc',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        />
      )}
    </div>
  );
};

export default ImageZoomer; 