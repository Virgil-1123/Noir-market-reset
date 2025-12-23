import React, { type CSSProperties } from "react";

// 定義元件的 props 類型
interface LineDotsProps {
  direction: "left-to-right" | "right-to-left";
  color1: string;
  color2: string;
  dotColor: string;
  style?: CSSProperties;
}

function LineDots({
  direction,
  color1,
  color2,
  dotColor,
  style,
}: LineDotsProps) {
  // 畫布的寬度
  const viewBoxWidth = 300;
  const viewBoxHeight = 5;
  const yCoordinate = viewBoxHeight / 2; // 固定 y 座標在畫布中央

  // 根據方向來設定點和線段的起點
  const startPoint =
    direction === "left-to-right"
      ? { x: 30, y: yCoordinate }
      : { x: 265, y: yCoordinate };

  // 根據方向來設定線段的終點
  const endPoint =
    direction === "left-to-right"
      ? { x: 300, y: yCoordinate }
      : { x: 0, y: yCoordinate };

  const gradientId = `line-gradient-${direction}-${color1.replace(
    /[^a-z0-9]/gi,
    ""
  )}-${color2.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="line-dots-svg"
      style={style}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: color1, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: color2, stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* 繪製點，現在它的位置會根據方向移動 */}
      <circle cx={startPoint.x} cy={startPoint.y} r="2" fill={dotColor} />

      {/* 繪製線段，它的起點也改變了 */}
      <line
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      />
    </svg>
  );
}

export default LineDots;
