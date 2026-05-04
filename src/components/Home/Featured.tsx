import LineDots from "../common/LineDots";
import ShopNowBtn from "../button/button";
import "./Featured.css";

interface FeaturedProps {
  img: string;
}

function Featured({ img }: FeaturedProps) {
  return (
    <div className="FeaturedArea">
      <div className="FeaturedAreaLeft">
        <img src={img} alt="精選商品" />
      </div>
      <div className="FeaturedAreaRight">
        <h1>開啟你的風格宣言</h1>
        <LineDots
          direction="left-to-right"
          color1="black"
          color2="#d9d9d9"
          dotColor="black"
          style={{ transform: "translateX(-25px)" }}
        />
        <h1>Unfold Your Style</h1>
        <div className="FeaturedButton">
          <ShopNowBtn text="Shop Now" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
