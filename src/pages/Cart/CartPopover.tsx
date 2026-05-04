import React, { useMemo } from "react";
import { Popover, Button } from "react-bootstrap";
import { useCart } from "./CartContext";
import PopoverCartItem from "./PopoverCartItem";
import "./CartPopover.css";

// Cart Popover 浮層
const CartPopover: React.FC = () => {
  // 獲取購物車狀態
  const { cartItems} = useCart();

  // 暫時移除cartCount 

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  //渲染清單和結算按鈕
  return (
    <Popover id="cart-popover">
      <Popover.Header as="h3">
        <span>購物車</span>
      </Popover.Header>

      <Popover.Body className="p-0">
        <div className="cart-item-list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <PopoverCartItem key={item.id} item={item} />
            ))
          ) : (
            <div className="p-3 text-center text-muted">購物車目前是空的</div>
          )}
        </div>

        <div className="p-3 border-top">
          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>合計</span>
            <span className="text-danger">${totalAmount.toLocaleString()}</span>
          </div>

          <div className="d-grid gap-2">
            <Button variant="dark">購物車詳情</Button>
            <Button variant="dark">結帳</Button>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
};

export default CartPopover;
