import React from "react";
import { Button } from "react-bootstrap";
import "./CategoryTabs.css";

interface CategoryTabsProps {
  allCategories: string[];

  selectedCategory: string;

  setSelectedCategory: (category: string) => void;
}

function CategoryTabs({
  allCategories,
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) {

    //映射表
  const CATEGORY_MAP = {
    All: "所有消息",
    Exhibition: "展覽資訊",
    Market: "市集活動",
    News: "新聞報導",
  };

  return (
    <div className="CategoryFilterWrapper">
      {allCategories.map((categoryName) => (
        <Button
          key={categoryName}
          variant="link"
          active={categoryName === selectedCategory}
          className="text-secondary"
          onClick={() => setSelectedCategory(categoryName)}
        >

        {/* // 讓 TypeScript 知道 categoryName 絕對是 CATEGORY_MAP 中的一個 key */}
          {CATEGORY_MAP[categoryName as keyof typeof CATEGORY_MAP]}

        </Button>
      ))}
    </div>
  );
}

export default CategoryTabs;
