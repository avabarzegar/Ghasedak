import React from "react";
import StyledButton from "../Button";
import Icon from "../../../../assets/Images/icon/flash-left.svg";
import "./BlogBtn.css";

// define blog btn 
const BlogBtn=()=>{
    return(
        <StyledButton button="purple">
            <div className="blog-btn">
                <span className="blog-btn-txt">ادامه مطلب</span>
                <div className="blog-btn-icon">
                    <img src={Icon} width="100%" height="100%" alt="icon" />
                </div>
            </div>
        </StyledButton>
    )
}
// define blog btn -end

export default BlogBtn;