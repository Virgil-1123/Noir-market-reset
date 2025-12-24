import { LatestNewsIfo } from "../../constants/LatestNews";
import { useState, useMemo } from "react";
import CategoryTabs from "./CategoryTabs";
import NewsCards from "./NewsCard";

function LatestNewsPage() {
  // 1. 邏輯區：useState, useMemo, 篩選資料

  const [selectedCategory, setSelectedCategory] = useState("All");

  const allCategories = useMemo(() => {
    const categories = new Set(LatestNewsIfo.map((item) => item.category));
    return ["All", ...Array.from(categories)];
  }, []);

  const filteredNews = LatestNewsIfo.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="LatestNewsArea" style={{minHeight:"500px"}}>
      <CategoryTabs
        allCategories={allCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="NewsListContainer">
        {filteredNews.map((newsItem) => (
          <NewsCards key={newsItem.id} newsData={newsItem} />
        ))}
      </div>
    </div>
  );
}

export default LatestNewsPage;
