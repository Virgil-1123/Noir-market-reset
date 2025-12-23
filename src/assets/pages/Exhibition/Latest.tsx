import React, { useState, useMemo } from "react";
import { LatestNewsIfo } from "../../constants/LatestNews";
import CategoryTabs from "../../components/Exhibition/CategoryTabs";
import NewsCard from "../../components/Exhibition/NewsCard";
import GradientLine from "../../components/common/GradientLine";

function LatestNewsPage() {
  // 狀態
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 記憶化
  const allCategories = useMemo(() => {
    const categories = new Set(LatestNewsIfo.map((item) => item.category));

    return ["All", ...Array.from(categories)];
  }, []);

  //分類
  const filteredNews = LatestNewsIfo.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="LatestNewsPageContainer" style={{width:'100%'}}>
      <CategoryTabs
        allCategories={allCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="NewsContentArea">
        {filteredNews.map((News, index) => (
          <React.Fragment key={News.id}>
            {index === 0 && (
              <GradientLine
                startColor="black"
                endColor="white"
                width={1200}
                style={{ margin: "30px 0" }}
              />
            )}
            <NewsCard newsData={News} />
            <GradientLine
              startColor="black"
              endColor="white"
              width={1200}
              style={{ margin: "30px 0" }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default LatestNewsPage;
