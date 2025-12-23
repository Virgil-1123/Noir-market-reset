import React from "react";
import FeaturePromo from "../AboutUs/FeaturePromo";
import './ProductBanner.css';

function ProductBanner() {
  return (
    <div className="ProductBannerContainer">
      <div className="FeatureWrapper">
        <FeaturePromo
          Title="商品總覽"
          SubTitle="Merchandise"
          StartColor="White"
          EndColor="black"
          FontColor="white"
        />
      </div>
      <div className="BannerPic">
        <img src="../../../../public/images/Product/banner.jpg" alt="商品總覽" />
      </div>
    </div>
  );
}

export default ProductBanner;