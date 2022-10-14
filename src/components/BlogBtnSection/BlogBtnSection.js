import React from "react";
import "./BlogBtnSection.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import BlogBtn from "../UI/Button/BtnBlog/BlogBtn";

// define button section in small blog card 
const BlogBtnSection=(props)=>{
    return(
        <div className="small-blog-btn">
            <div className={props.flex}>
                <span className={`${props.border} small-blog-btn-text`}>نویسنده : {props.author}</span>
                <span className="small-blog-btn-text">تاریخ : {props.date}</span>
            </div>
            <BlogBtn />
        </div>
    )
}
// define button section in small blog card -end

export default BlogBtnSection;