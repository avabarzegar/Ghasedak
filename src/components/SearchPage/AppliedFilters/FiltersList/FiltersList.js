import React from "react";
import "./FiltersList.css";
import SingleFilterLayout from "../SingleFilterLayout/SingleFilterLayout";
import AppliedSingleFilter from "../AppliedSingleFilter/AppliedSingleFilter";
import {useFiltersContext} from "../../../../Context/FilterContext/FilterContext";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";

// define all applied filters list
const FiltersList =()=>{
    
    // state 
    const {sorting , setSorting} = useFiltersContext();
    const {searchValue} = useAppContext();
    // state end


    // delete specific filter by clicking on its delete button 
    const deleteFilterHandler =(index)=>{
        const updatedSorting = [...sorting];
        updatedSorting.splice(index , 1);
        setSorting(updatedSorting);
    }
    // delete specific filter by clicking on its delete button end

    return(
        <div className="filter-list">
          <AppliedSingleFilter 
            Filter= {`جستجوی عبارت : ${searchValue}`}
          />
         {sorting?.map((item,index)=>{
            return(
              <SingleFilterLayout 
               key={index}
               Filter={item}
               click={()=>deleteFilterHandler(index)}
              />
            )
         })}
        </div>
        
    )
}

// define all applied filters list 

export default FiltersList;