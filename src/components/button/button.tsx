import Button from "react-bootstrap/Button";
import "./button.css";
import { Link } from "react-router-dom";

interface ShopNowBtnProps {
  text: string;
}

function ShopNowBtn({ text }: ShopNowBtnProps) {
  return (
    <Link to={'/ProductList'}>
      <Button variant="secondary" size="sm" className="ShopNowBtn">
        <span className="ShopNowBtn-text">{text}</span>
      </Button>
    </Link>
  );
}

export default ShopNowBtn;
