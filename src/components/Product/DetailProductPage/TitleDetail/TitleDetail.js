import React from "react";


const TitleDetail = (props) => {
   return (
      <span className={`titledetail ${props.titleDetailCustomStyle}`}>{props.TitleText}</span>
   )
}

export default TitleDetail;