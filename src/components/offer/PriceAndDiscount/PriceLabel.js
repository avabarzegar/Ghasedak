import React from "react";



const PriceLabel = (props) => {
   return (
      <span className={`${props.customstyle} color `}>{props.children}</span>
   )
}

export default PriceLabel;