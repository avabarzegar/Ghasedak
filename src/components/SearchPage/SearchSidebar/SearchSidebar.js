import React from "react";
// components 
import SearchBreadcrumb from "../../../components/SearchPage/SearchBreadcrumb/SearchBreadcrumb";
import AppliedFilters from "../../../components/SearchPage/AppliedFilters/AppliedFilters";
import SearchFilters from "../../../components/SearchPage/SearchFilters/SearchFilters";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
// components end


// define search sidebar 
const SearchSidebar=()=>{
    return(
        <>
          <SearchBreadcrumb />
          <AppliedFilters />
          <AvailableProducts />
          <SearchFilters />
        </>
    )
}
// define search sidebar end

export default SearchSidebar;