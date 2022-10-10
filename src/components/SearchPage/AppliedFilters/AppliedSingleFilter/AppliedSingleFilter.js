import React from "react";
import "./AppliedSingleFilter.css";

// define applided single filter 
const AppliedSingleFilter=(props)=>{
    return(
        <div className="single-filter">
            <span>
                {props.Filter}
            </span>
        </div>
    )
}

// define applided single filter end

export default AppliedSingleFilter;