import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import type { AllProduct } from "../../constants/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../pages/Cart/CartContext";
import ImageZoomer from "./ImageZoomer";
import RelatedProducts from "./RelatedProducts";
import Swal from "sweetalert2";

import "./ProductDetailView.css";

interface ProductDetailViewProps {
  product: AllProduct;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const isSmallThumbSet = product.imgUrl.length < 4;
  const thumbnailAlignmentClass = isSmallThumbSet
    ? "ProductThumbnails--flex-start"
    : "ProductThumbnails--justify-between"; // 在CSS 中定義這兩個類別

  const { addToCart } = useCart();

  const formattedPrice = `$${product.price.toLocaleString()}`;

  // const [quantity, setQuantity] = React.useState(1);

  const [mainImageIndex, setMainImageIndex] = React.useState(0);

  const handleAddToCart = () => {
    // 呼叫 CartContext 提供的 addToCart 函式
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

  const [isCollected, setIsCollected] = React.useState(false);

  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []); // 依賴項為空，因為它只設置一個固定的 false 值

  const handleCollection = useCallback(() => {
    // 判斷：如果目前是未收藏狀態 (isCollected 為 false)，則啟用動畫
    if (!isCollected) {
      setIsAnimating(true);
    }
    // 2. 執行收藏/取消收藏邏輯 (這是必要的，它會更新 isCollected 的值)
    setIsCollected((prev) => !prev);

    // 💡 3. 不需要擔心 onAnimationEnd，它會自動在動畫結束時將 setIsAnimating(false) 設回來。
    // 如果 isAnimating 是 false (即取消收藏時)，onAnimationEnd 也不會被觸發。

    if (!isCollected) {
      // 收藏操作
      Swal.fire({
        icon: "success",
        title: "已收藏",
        text: "商品已成功加入您的收藏清單！",
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          container: "swal-wide-container",
        },
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "已移除",
        text: "商品已從您的收藏清單中移除。",
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          container: "swal-wide-container",
        },
      });
    }
  }, [isCollected]); // 💡 確保依賴項中包含 isCollected

  //頁籤
  const [activeTab, setActiveTab] = React.useState<
    "商品介紹" | "注意事項" | "退換須知"
  >("商品介紹");

  return (
    <>
      {/* 1. 使用 Bootstrap RWD 容器和邊距 */}
      <Container className="my-5 ProductDetailContainer">
        <Row>
          {/* 1. 左側：圖片輪播與縮圖區 (Col-1) */}
          <Col lg={7} md={12} className="ProductImageGallery">
            {/* 主圖：根據狀態顯示圖片 */}
            <ImageZoomer
              imageUrl={product.imgUrl[mainImageIndex]}
              scale={2.5}
              zoomSize={200}
            />
            {/* 底部縮圖區 */}
            <div
              className={`d-flex mt-3 ProductThumbnails ${thumbnailAlignmentClass}`}
            >
              {product.imgUrl.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`縮圖 ${index + 1}`}
                  className={`img-thumbnail  ImgThumbnail ${
                    index === mainImageIndex ? "Active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setMainImageIndex(index)}
                />
              ))}
            </div>
          </Col>

          {/* 2. 右側：商品資訊、價格與購買區 (Col-2) */}
          <Col lg={5} md={12} className="mt-4 mt-lg-0 ProductInfoPanel">
            {/* 品牌與名稱 */}
            <h3 className="BrandName">{product.Band}</h3>
            <h1 className="ProductTitle">{product.name}</h1>
            <p className="ProductSize">Size: {product.size}</p>

            {/* 價格 */}
            <div className="ProductPrice">
              <span className="PriceValue">{formattedPrice}</span>
            </div>

            <div className="mb-4 PurchaseArea">
              {/* 加入購物車 & 愛心按鈕 */}
              <div className="d-flex align-items-center mt-3 ActionButtons">
                <Button
                  variant="dark"
                  size="lg"
                  className="flex-grow-1 me-3 AddToCartBtn rounded-0" // flex-grow-1: 佔滿剩餘空間; me-3: 右邊距
                  onClick={handleAddToCart}
                >
                  加入購物車
                </Button>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`WishlistIcon ${isCollected ? "Collected" : ""} ${
                    isAnimating ? "animate-click" : ""
                  }`}
                  onClick={handleCollection}
                  onAnimationEnd={handleAnimationEnd}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            {/* 尺寸詳情 */}
            <div className="MeasurementsDetail">
              {product.shoulder && <p>肩寬 Shoulder : {product.shoulder}cm</p>}
              {product.pit && <p>胸寬 Pit to pit : {product.pit}cm</p>}
              {product.length && <p>衣長 Length : {product.length}cm</p>}
              {product.sleeve && <p>袖長 Sleeve : {product.sleeve}cm</p>}
            </div>
          </Col>
        </Row>

        <div className="ProductTabs mt-5">
          {/* 導航列 */}
          <div className="TabsHeader d-flex justify-content-around border-bottom">
            {/* 商品介紹頁籤 */}
            <div
              className={`TabItem ${activeTab === "商品介紹" ? "Active" : ""}`}
              onClick={() => setActiveTab("商品介紹")}
            >
              商品介紹
            </div>

            {/* 注意事項頁籤 */}
            <div
              className={`TabItem ${activeTab === "注意事項" ? "Active" : ""}`}
              onClick={() => setActiveTab("注意事項")}
            >
              注意事項
            </div>

            {/* 退換須知頁籤 */}
            <div
              className={`TabItem ${activeTab === "退換須知" ? "Active" : ""}`}
              onClick={() => setActiveTab("退換須知")}
            >
              退換須知
            </div>
          </div>

          {/* 內容區域 */}
          <div className="TabsContent mt-4">
            {/* 根據 activeTab 顯示對應的內容 */}
            {activeTab === "商品介紹" && (
              <div className="TabPane">
                {/* 💡 這裡放商品介紹的內容 */}
                <h2>商品詳細介紹</h2>
                <p>{product.description || "此處是商品的詳細介紹。"}</p>
                {/* 你可以在這裡渲染 product.longDescription 等資訊 */}
              </div>
            )}

            {activeTab === "注意事項" && (
              <div className="TabPane">
                {/* 💡 這裡放注意事項的內容 */}
                {/* 這裡可以使用你圖片中的列表內容 */}
                <ul>
                  <li>選超商取貨付款未取件時將加入黑名單請留意到貨通知。</li>
                  <li>
                    網拍商品皆為二手老品，二手選品必定有使用上的痕跡，這些是歲月遺留下來的回憶，若無法接受者，請考慮清楚後再下單。
                  </li>
                  {/* ... 其他注意事項項目 ... */}
                </ul>
              </div>
            )}

            {activeTab === "退換須知" && (
              <div className="TabPane">
                <p>
                  退換商品必須保持原樣、未下水、寄回時，如沒有任何氣味或是人為使用痕跡，等，恕不予退換貨。
                </p>
                <p>
                  若商品與想像不符、不合適、色差、想更換尺碼等問題恕不提供退換貨。
                </p>
              </div>
            )}

            <RelatedProducts
              currentProductId={product.id} // 傳遞當前 ID 排除自身
              targetCategory={product.category} // 傳遞當前商品的種類進行篩選
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetailView;
