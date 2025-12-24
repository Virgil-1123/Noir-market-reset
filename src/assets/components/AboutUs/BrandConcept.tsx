import FeaturePromo from "../../components/AboutUs/FeaturePromo";
import "./BrandConcept.css";

function BrandConcept() {
  return (
    <div className="BrandConcept">
      <div className="BrandConceptLeft">
        <FeaturePromo
          Title="品牌理念"
          SubTitle="Brand Concept"
          StartColor="White"
          EndColor="black"
          FontColor="white"
        />
      </div>

      <div className="BrandConceptPic">
        <img src="../../../../public/images/AboutUs/BrandConcept.jpg" alt="品牌理念" />
      </div>
    </div>
  );
}

export default BrandConcept;
