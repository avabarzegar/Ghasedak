import React from "react";
import "./SearchFilters.css";
import CustomDropdown from "../SearchDropdown/SearchDropdown";
import SearchFilterHeadLayout from "../SearchFilterHeadLayout/SearchFilterHeadLayout";
import Icon from "../../../assets/Images/icon/setting-5.svg";

// define applied filters on search
const SearchFilters = () => {
  return (
    <section className="search-filters-container">
      <SearchFilterHeadLayout
        icon={Icon}
        title="فیلتر ها"
        border="border-black"
      />
      <CustomDropdown />
    </section>
  );
};
// define applied filters on search end

export default SearchFilters;
