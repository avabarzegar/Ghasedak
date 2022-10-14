import React from "react";
import CustomBreadcrumb from "../../../UI/Breadcrumb/Breadcrumb";
import Icon from "../../../../assets/Images/icon/firstline.svg";
import "./BlogSideBreadcrumb.css";

// define blog page bread crumb 
const BlogSideBreadcrumb =()=>{
    return(
        <div className="breadcrumb-blog">
          <CustomBreadcrumb 
          activeImage={Icon}
          activeText="بلاگ"
          />
        </div>
    )
}
// define blog page bread crumb -end

export default BlogSideBreadcrumb;