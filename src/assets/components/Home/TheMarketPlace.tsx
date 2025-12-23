import React from "react";
import SectionBar from "./SectionBar";
import Featured from "./Featured";

function TheMarketPlace() {
  return (
    <div className="TheMarketArea">
      <SectionBar
        title="The Marketplace"
        titleColor="black"
        lineColor1="black"
        lineColor2="white"
        dotColor="black"
        
      />

      <div className="TheMarketPlaceArea" style={{ margin: "30px 30px" }}>
        <Featured img="/images/TheMarketplace/TheMarketplace.jpg" />
      </div>
    </div>
  );
}

export default TheMarketPlace;
