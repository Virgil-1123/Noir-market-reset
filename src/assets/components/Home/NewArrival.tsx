import React from "react";
import SectionBar from "./SectionBar";
import ProductGallery from "./ProductGallery";



function NewArrival() {
  return (
    <div className="NewArrivalArea" style={{backgroundColor:"black"}}>
    <SectionBar title="New Arrival" lineColor1="white" lineColor2="black" dotColor="white" titleColor="white"/>
      <ProductGallery/>
    </div>
  );
}


export default NewArrival;