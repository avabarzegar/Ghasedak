import React from "react";
import Icon from "../../../assets/Images/icon/search-result.svg";
import "./SearchFilterHeadLayout.css";


// define applied filters section 
const AppliedFilters =(props)=>{
    return(
        <div className="filters-container">
            <div className={`${props.border} head-filters`}>
                <div className="filter-result-icon">
                    <img src={props.icon} width="100%" height="100%" alt="icon" />
                </div>
                <span className="filter-result-head">
                {props.title}  
                </span>
            </div>
            {props.children}
        </div>
    )
}
// define applied filters section end

export default AppliedFilters;