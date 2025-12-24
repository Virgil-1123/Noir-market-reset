import Button from "react-bootstrap/Button";
import "./button.css";

interface ShopNowBtnProps {
  text: string;
}

function ShopNowBtn({ text }: ShopNowBtnProps) {
  return (
    <Button variant="secondary" size="sm" className="ShopNowBtn">
      <span className="ShopNowBtn-text">{text}</span>
    </Button>
  );
}

export default ShopNowBtn;
