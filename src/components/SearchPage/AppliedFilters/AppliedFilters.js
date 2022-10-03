import React from "react";
import "./AppliedFilters.css";
import Icon from "../../../assets/Images/icon/search-result.svg";
import SearchFilterHeadLayout from "../SearchFilterHeadLayout/SearchFilterHeadLayout";
import FiltersList from "./FiltersList/FiltersList";


// define applied filters section 
const AppliedFilters =()=>{
    return(
        <section className="applied-filters">
          <SearchFilterHeadLayout
           icon={Icon}
           title="فیلترهای اعمال شده"
          >
            <FiltersList />
          </SearchFilterHeadLayout>
          
        </section>
    )
}
// define applied filters section end

export default AppliedFilters;