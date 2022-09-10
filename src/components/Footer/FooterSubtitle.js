import React from "react";
import './FooterSubtitle.css'

const FooterSubtitle = (props) =>{
   return(
      <a className="links_footer_subtitle" href={props.href}>
         {props.children}
      </a>
   )



}

export default FooterSubtitle;


