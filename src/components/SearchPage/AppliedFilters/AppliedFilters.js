import React from "react";
import "./AppliedFilters.css";
import Icon from "../../../assets/Images/icon/search-result.svg";
import SearchFilterHeadLayout from "../SearchFilterHeadLayout/SearchFilterHeadLayout";
import FiltersList from "./FiltersList/FiltersList";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";

// define applied filters section
const AppliedFilters = () => {
  // variables
  const { sorting } = useAppContext();
  // variables

  return (
    <section
      className={
        sorting.length === 0 ? "not-applied-filters" : "applied-filters"
      }
    >
      <SearchFilterHeadLayout icon={Icon} title="فیلترهای اعمال شده">
        <FiltersList />
      </SearchFilterHeadLayout>
    </section>
  );
};
// define applied filters section end

export default AppliedFilters;
