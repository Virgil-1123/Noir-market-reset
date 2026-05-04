import { type FC } from "react";
import "./Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="FooterContainer">
      <div className="FooterInfoSection">
        <p className="InfoText">店址：桃園市中壢區復興路 46 號 9 樓</p>
        <p className="InfoText">營業時間：11:00 - 21:00</p>
        
        <div className="LinkGroup">
          <a href="/notice" className="FooterLink">購物須知</a>
          <span className="Divider">|</span>
          <a href="/privacy" className="FooterLink">隱私政策</a>
        </div>
      </div>

      {/* <div className="IconGroup">
        <a href="https://line.me" target="_blank" rel="noreferrer" className="IconButton">
          <img src="Line.svg" alt="Line" className="SocialIcon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="IconButton">
          <img src="Instagram.svg" alt="IG" className="SocialIcon" />
        </a>
      </div> */}

      <div className="BottomCopyrightSection">
        <p className="CopyrightText">
          &copy; {new Date().getFullYear()} THE ESSENCE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;