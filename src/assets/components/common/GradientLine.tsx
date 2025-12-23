import React, { type CSSProperties } from "react";

export interface GradientLineProps {
  startColor: string;
  endColor: string;
  width: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

function GradientLine({
  startColor,
  endColor,
  width,
  height = 1.5, 
  className = "gradient-line-svg",
  style,
}: GradientLineProps) {
  const viewBoxWidth = width;
  const viewBoxHeight = height;
  const yCoordinate = viewBoxHeight / 2; // 線段的 Y 座標 // 為了確保 ID 唯一性，使用顏色和寬度

  const gradientId = `line-gradient-${startColor.replace(
    /[^a-z0-9]/gi,
    ""
  )}-${endColor.replace(/[^a-z0-9]/gi, "")}-${width}`;

  return (
    <svg
      width={width}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={className}
      style={style}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1={yCoordinate} // 漸層起點：X=0
          x2={viewBoxWidth}
          y2={yCoordinate} // 漸層終點：X=寬度
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1={yCoordinate}
        x2={viewBoxWidth}
        y2={yCoordinate}
        stroke={`url(#${gradientId})`}
        strokeWidth={viewBoxHeight} // 線段寬度使用 SVG 高度
      />
    </svg>
  );
}

export default GradientLine;
