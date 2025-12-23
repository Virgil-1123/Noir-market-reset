import React from "react";
import { useParams } from "react-router-dom";
import { LatestNewsIfo, CATEGORY_MAP } from "../../constants/LatestNews";
import DetailContentRenderer from "../../components/Exhibition/DetailContentRenderer";
import DetailTitleHeader from "../../components/Exhibition/DetailTitleHeader";

function NewsDetailPage() {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="DetailPageError">
        <h1>400 - 缺少文章 ID</h1>
      </div>
    );
  }

  const newsId = parseInt(id);
  const detailData = LatestNewsIfo.find((item) => item.id === newsId);

  if (!detailData) {
    return (
      <div className="DetailPageError">
        <h1>404-找不到此消息或展覽</h1>
      </div>
    );
  }

  const label = CATEGORY_MAP[detailData.category] || "詳細內容";

  const location = "320桃園市中壢區復興路46號9樓";

  const sectionToRender = detailData.sections || [];

  return (
    <div className="NewsDetailPageContainer">
      <DetailTitleHeader
        categoryLabel={label}
        title={detailData.title}
        time={detailData.time}
        location={location}
      />

      <DetailContentRenderer sections={sectionToRender} />
    </div>
  );
}

export default NewsDetailPage;
