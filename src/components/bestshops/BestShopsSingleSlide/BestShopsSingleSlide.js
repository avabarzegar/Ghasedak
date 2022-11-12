import React, { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./BestShopsSingleSlide.css";

const BestShopssingleslide = (props) => {
  const nameRef = useRef(null);
  return (
    <div className="bestShops-single-container">
      <div className="slides-near-shops">
        <div className="bg-color-shops">
          <img
            src={props.activeImage}
            alt="active-icon"
            width="100%"
            height="100%"
          />
        </div>
        <span ref={nameRef}>{props.acticeText}</span>
      </div>
    </div>
  );
};

export default BestShopssingleslide;
