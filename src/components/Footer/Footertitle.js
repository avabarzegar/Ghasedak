import React from "react";
import './Footertitle.css'

const Footertitle = (props) =>{
   return(
      <span className="footer_titles">
         {props.children}
      </span>
   )
}


export default Footertitle;