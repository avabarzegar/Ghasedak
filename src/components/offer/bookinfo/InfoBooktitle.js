import React from "react";
import './InfoBooktitle.css'


const InfoBookstitle = (props) => {
   return (
      <p className={`${props.customstyle} color `}>{props.children}</p>
   )
}

export default InfoBookstitle;