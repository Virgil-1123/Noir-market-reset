import React from "react";
import { Link } from "react-router-dom";
import type { AllProduct } from "../../constants/Product";
import { Card } from "react-bootstrap";
import "./RelatedProductCard.css";

interface RelatedProductCardProps {
  product: AllProduct; // 只接收一個商品物件
}

// 💡 注意：這裡不再有 useState/useEffect 這些邏輯
const RelatedProductCard: React.FC<RelatedProductCardProps> = ({ product }) => {
  // 💡 確保這裡的 product 變數是可用的，因為它是 props
  const relatedImageUrl =
    product.imgUrl.length > 0
      ? product.imgUrl[0]
      : "/path/to/default-image.jpg";

  const formattedPrice = `NT$${product.price.toLocaleString()}`;

  const detailPath = `/shop/${product.id}`;

  return (
    <Link to={detailPath} className="text-decoration-none text-dark">
      <Card className="RelatedCard">
        <div className="RelatedCardImageWrapper">
          <Card.Img
            variant="top"
            src={relatedImageUrl}
            alt={product.name}
            className="RelatedCardImage"
          />
        </div>

        <Card.Body className="RelatedCardBody">
          <Card.Title>{product.Band}</Card.Title>
            <Card.Text>{product.name}</Card.Text>
          <Card.Text>{formattedPrice}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default RelatedProductCard;
