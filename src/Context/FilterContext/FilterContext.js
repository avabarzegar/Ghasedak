import React, { createContext, useContext, useEffect, useState } from "react";

// define a context for filters applied on search 
const FiltersContext = createContext({});

const SearchAFilter =(props)=>{
    // define states 
    const [sorting , setSorting] =useState([]);
    const [producer ,setProducer] =useState('');

    // define states end
  
    return (
        <FiltersContext.Provider value={{ sorting , setSorting , setProducer }}>
          {props.children}
        </FiltersContext.Provider>
    );

}
// define a context for filters applied on search end
 


export const useFiltersContext = () => useContext(FiltersContext);
export default SearchAFilter;
