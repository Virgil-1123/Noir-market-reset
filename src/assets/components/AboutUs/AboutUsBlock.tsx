import React from "react";
import FeaturePromo from "../../components/AboutUs/FeaturePromo";
import "./AboutUsBlock.css";

function AboutUsBlock() {
  return (
    <div className="AboutUsBlock">
      <div className="FeaturePromoBox">
        <FeaturePromo
          Title="關於我們"
          SubTitle="About US"
          StartColor="black"
          EndColor="white"
          FontColor="black"
        />
      </div>

      <div className="AboutUsText">
        <p>
          我們致力於為這些曾被遺忘的時裝與古著尋找新的歸宿，讓它們在您的穿搭中再次綻放光彩。
          這是一場關於風格的探索，也是一場關於地球的承諾。
        </p>
      </div>
    </div>
  );
}

export default AboutUsBlock;
