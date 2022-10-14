import React  from "react";
import Icon from "../../assets/Images/icon/firstline.svg";
import "./BlogTitle.css";

// define blog title component 
const BlogTitle=(props)=>{
    return(
        <div className="blog-title-container">
            <div className="blog-title-icon">
                <img src={Icon} width="100%" height="100%" alt="icon" />
            </div>
            <span className="blog-title">
                {props.title}
            </span>
        </div>
    )
}
// define blog title component end

export default BlogTitle;