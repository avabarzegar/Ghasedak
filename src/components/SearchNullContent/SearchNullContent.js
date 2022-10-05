import React from "react";
import "./SearchNullContent.css";
import NotFound from "../../assets/Images/not-found.png";

// define search null page content 
const SearchNullContent =()=>{
    return(
        <section className="not-found-container">
          <div className="not-found-img">
            <img src={NotFound} width="100%" height="100%" alt="not found" />
          </div>
          <span className="search-null-txt">
          جستجوی شما نتیجه ای را در بر نداشت
          </span>
        </section>
    )
}

// define search null page content end

export default SearchNullContent;