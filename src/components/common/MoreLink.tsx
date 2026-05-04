import React from "react";
import { Link } from "react-router-dom";
import "./MoreLink.css";

interface MoreLinkProps {
  linkUrl: string;
  text?: string;
  color?:string;
}

const MoreLink: React.FC<MoreLinkProps> = ({ linkUrl, text = "more", color="black"}) => {
  return (
    <Link to={linkUrl} className="MoreLinkWrapper" style={{color:color}}>
        <span className="MoreLinkText">{text}</span>
        <span className="MoreLinkArrow">&rarr;</span>
    </Link>
  );
};

export default MoreLink;
