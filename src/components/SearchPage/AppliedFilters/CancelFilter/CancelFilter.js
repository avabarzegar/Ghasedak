import React from "react";
import "./CancelFilter.css";

// define cancel filter button 
const CancelFilter=(props)=>{
    return(
        <div onClick={props.click} className="cancel-filter">
            <span>حذف فیلتر</span>
        </div>
    )
}
// define cancel filter button end

export default CancelFilter;
