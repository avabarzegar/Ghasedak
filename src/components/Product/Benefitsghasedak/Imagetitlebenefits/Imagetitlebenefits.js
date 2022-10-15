import React from "react";
import "./Imagetitlebenefits.css";
import "./Imagetitlebenefits.css";

const Imagetitlebenefits = (props) => {
   return (
      <div className={`Imagetitlebenefits-parent-section ${props.imageBenefit}`}>
         <img src={props.src} alt={props.alt} />
         <span>{props.ImageTitle}</span>
      </div>
   )
}

export default Imagetitlebenefits;