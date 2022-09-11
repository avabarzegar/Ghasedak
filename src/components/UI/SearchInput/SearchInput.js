import React from "react";
import './SearchInput.css';
import Search from '../../../assets/Images/icon/search-normal.svg';

// == define search input == 

const SearchInput =(props)=>{
    return(
        <div className="search-input-container">
            <input className="search-input" placeholder={props.placeholder} />
            <div className="search-icon">
              <img src={Search} width='100%' height='100%' alt='search icon' />
            </div>
        </div>
    )
}
// == define search input end == 

export default SearchInput;

