import React from "react";
import './SearchInput.css';
import HeadPhone from '../../../assets/Images/icon/headphone.svg';

// == define search input == 

const SearchInput =(props)=>{
    return(
        <div className="search-input-container">
            <input className="search-input" placeholder={props.placeholder} />
            <div className="search-icon">
              <img src={HeadPhone} alt='search icon' />
            </div>
        </div>
    )
}
// == define search input end == 

export default SearchInput;

