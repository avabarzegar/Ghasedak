import React from "react";
import AppliedSingleFilter from "../AppliedSingleFilter/AppliedSingleFilter";
import CancelFilter from "../CancelFilter/CancelFilter";
import "./SingleFilterLayout.css";

// define filter layout in applied filter section 
const SingleFilterLayout =(props)=>{
    return(
        <div className="applied-filters-content">
            <AppliedSingleFilter
              Filter={props.Filter}
              title={props.title}
            />
            <CancelFilter click={props.click}/>
        </div>
    )
}

// define filter layout in applied filter section end

export default SingleFilterLayout;