import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import type { AllProduct } from "../../constants/Product";
import { useCart } from "../../pages/Cart/CartContext";
import "./ProductCard.css";

interface ProductCardProps {
  product: AllProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovering, setIsHovering] = useState(false);

  const mainImageUrl =
    product.imgUrl.length > 0
      ? product.imgUrl[0]
      : "/path/to/default-image.jpg";

  const hoverImageIndex = product.imgUrl.length < 3 ? 1 : 2;
  const hoverImageUrl = product.imgUrl[hoverImageIndex] || mainImageUrl;

  const currentImageUrl = isHovering ? hoverImageUrl : mainImageUrl;

  const formattedPrice = `NT$${product.price.toLocaleString()}`;

  const detailPath = `/shop/${product.id}`;

  const { addToCart } = useCart();

  const handleQuickAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // 阻止事件向上傳播，防止觸發父層 <Link> 的導航！
    e.stopPropagation(); // 阻止事件繼續傳播 (安全起見)

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      brand: product.Band,
      imageUrl: product.imgUrl[0],
      size: product.size,
    });
    Swal.fire({
      icon: "success",
      title: "已加入購物車",
      text: `${product.name}已成功加入!`,
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        container: "swal-wide-container",
      },
    });
  };

  return (
    <Link to={detailPath} className="text-decoration-none text-dark">
      <Card
        className="ProductCard"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="ProductCardImageWrapper">
          <Card.Img
            variant="top"
            src={currentImageUrl}
            alt={product.alt || product.name}
            className={`ProductCardImage ${isHovering ? "is-hovering" : ""}`}
          />

          <Button
            variant="dark"
            className="AddToCartOverlay"
            onClick={handleQuickAddToCart}
          >
            快速加入
          </Button>
        </div>

        <Card.Body className="ProductCardBody">
          <Card.Subtitle>{product.Band}</Card.Subtitle>

          <Card.Title>{product.name}</Card.Title>

          <Card.Text className="ProductCardPrice">{formattedPrice}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
