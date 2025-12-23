import React from "react";
import type { ContentSection } from "../../constants/LatestNews";
import "./DetailContentRenderer.css"; 


interface RendererProps {
  sections: ContentSection[];
}

function DetailContentRenderer({ sections }: RendererProps) {
  if (!sections || sections.length === 0) {
    return <p className="no-content-message">內容正在準備中，敬請期待。</p>;
  }

  return (
    <div className="ContentRendererContainer">
      {sections.map((section, index) => (
        // 使用 section.type 和 index 作為 key
        <div
          key={`${section.type}-${index}`}
          className={`section-block section-${section.type}`}
        >
          {/* 1. 渲染文字 (Text) 區塊 */}
          {section.type === "text" && section.value && (
            <p className="detail-text">{section.value}</p>
          )}

          {/* 2. 渲染標題 (Heading) 區塊 */}
          {section.type === "heading" && section.value && (
            <h3 className="detail-heading">{section.value}</h3>
          )}

          {/* 3. 渲染圖片 (Image) 區塊 */}
          {section.type === "image" &&
            // images 陣列且數量大於 1，決定是否為並排圖
            (section.images && section.images.length > 1 ? (
              // --- A. 渲染並排圖片 ---
              <div className="detail-image-row-container">
                {section.images.map((img, imgIndex) => (
                  <figure key={imgIndex} className="image-row-item">
                    <img
                      src={img.value}
                      alt={img.caption || `並排圖片 ${imgIndex + 1}`}
                    />
                    {img.caption && (
                      <figcaption className="detail-caption-row">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              // --- B. 渲染單張圖片 ---
              section.value && ( // 確保單圖有 value
                <figure className="detail-image-block">
                  <img
                    src={section.value}
                    alt={section.caption || `內容圖片 ${index + 1}`}
                    className="detail-image"
                  />
                  {section.caption && (
                    <figcaption className="detail-caption">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )
            ))}
        </div>
      ))}
    </div>
  );
}

export default DetailContentRenderer;
