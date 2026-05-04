import React from "react";
import "./FeaturePromo.css";

interface FeaturePromoProps {
  Title: string;
  SubTitle: string;
  StartColor: string;
  EndColor: string;
  FontColor: string;
}

const FeaturePromo: React.FC<FeaturePromoProps> = ({
  Title,
  SubTitle,
  StartColor,
  EndColor,
  FontColor,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right,${StartColor},${EndColor})`,
  };

  return (
    <div className="FeaturePromoWrapper">
      <h2 className="FeaturePromoTile" style={{ color: FontColor }}>
        {Title}
      </h2>
      <span className="GradientLine" style={gradientStyle} />
      <h2 className="FeaturePromoSubtitle" style={{ color: FontColor }}>
        {SubTitle}
      </h2>
    </div>
  );
};

export default FeaturePromo;
