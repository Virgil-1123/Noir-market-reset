import LineDots from "../common/LineDots";
import "./Banner.css";

interface BannerProps {
  FirstText: string;
  SecondText: string;
}

function Banner({ FirstText, SecondText }: BannerProps) {
  return (
    <>
      <div className="BannerBox">
        <img
          className="BannerImg"
          src="/images/banner.jpg"
          alt="Banner"
        />

        <div className="TextBox">
          <h1 className="BannerText">{FirstText}</h1>
          <LineDots
            direction="left-to-right"
            color1="white"
            color2="gray"
            dotColor="white"
          />
          <h1 className="BannerText">{SecondText}</h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
