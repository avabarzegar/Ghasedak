import React from "react";
import './CircleOffer.css'

const CircleOffer = (props) => {
   return (
      <div className="circle-offer-parent">
         {props.children}
      </div>
   )
}

export default CircleOffer;