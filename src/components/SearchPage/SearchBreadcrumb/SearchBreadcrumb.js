import {React } from "react";
import SearchIcon from '../../../assets/Images/icon/bread-search.svg';
import CustomBreadcrumb from '../../UI/Breadcrumb/Breadcrumb';
import  {useAppContext}  from "../../../Context/SearchContext/SearchContext";
import  './SearchBreadcrumb.css';



// search bread crumb 
const SearchBreadcrumb=(props)=>{

    const {searchValue} = useAppContext();


    return(
     
        <section className='breadcrumb-layout'>
            <CustomBreadcrumb 
                activeImage={SearchIcon}
                activeText={`نتیجه جستجوی عبارت: ${searchValue}`}
            />
            <div className='search-result-container'>
                <span className='search-result'>
                  {`جستجوی عبارت: ${searchValue} (4 محصول)`}
                </span>
            </div>
        </section>    

    )
}

// search bread crumb end

export default SearchBreadcrumb;