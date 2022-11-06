import { React, useEffect } from "react";
import SearchIcon from "../../../assets/Images/icon/bread-search.svg";
import CustomBreadcrumb from "../../UI/Breadcrumb/Breadcrumb";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./SearchBreadcrumb.css";

// search bread crumb
const SearchBreadcrumb = (props) => {
  const { searchValue , setSearchFilter,newData } = useAppContext();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {`نتیجه جستجوی عبارت: ${searchValue}`}
    </Tooltip>
  );
  useEffect(() => {
    setSearchFilter(searchValue);
  });
  return (
    <section className="breadcrumb-layout">
      <CustomBreadcrumb
        activeImage={SearchIcon}
        activeText={`نتیجه جستجوی عبارت: ${searchValue}`}
      />
      <div className=" search-result-container">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <span className="search-result-value search-result">
            {`جستجوی عبارت: ${searchValue}`}
          </span>
        </OverlayTrigger>
        <span className="search-result">{`(${newData? newData.length : "0"} محصول)`}</span>
      </div>
    </section>
  );
};

// search bread crumb end

export default SearchBreadcrumb;
