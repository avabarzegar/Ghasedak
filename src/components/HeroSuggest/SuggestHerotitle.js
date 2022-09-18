import React from "react";
import './SuggestHerotitle.css'


const SuggestHerotitle = (props) => {
   return (
      <span className="SuggestHerotitle">
         {props.children}
      </span>
   )
}

export default SuggestHerotitle;