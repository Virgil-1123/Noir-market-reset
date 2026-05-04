import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "./CartContext";
import type { CartItem } from "./CartContext";
import "./PopoverCartItem.css";

interface PopoverItemProps {
  item: CartItem; // 接收單一的商品數據
}

const PopoverCartItem: React.FC<PopoverItemProps> = ({ item }) => {
  // 1. 💡 使用 useCart() 獲取移除函式
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    // 呼叫 Context 函式，傳入要移除商品的 ID

    removeFromCart(item.id);
  };

  return (
    <Card className="CartItem">
      <Card.Img
        variant="top"
        src={item.imageUrl}
        alt={item.name}
        style={{ width: "60px", height: "80px", objectFit: "cover" }}
      />
      <Card.Body className="CartItemBody">
        <h2>{item.brand}</h2>
        <h2>{item.name}</h2>
        <h3>${item.price.toLocaleString()}</h3>
      </Card.Body>
      <Button className="CartBtn" onClick={handleRemove}>
        刪除
      </Button>
    </Card>
  );
};

export default PopoverCartItem;
