import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const CoinsContext = createContext({});

const SearchContext = ({ children }) => {

//   define states 
  const [searchValue, setSearchValue] = useState(' ');
  const [bookData , setBookData ] = useState([]);
//   define states end

useEffect(()=>{
    // getting book data and push them in a variable
    const token ='iLDhAayZTRWLPLpWvYDK1yhAVfHl46GAfzxKb8aO';
   
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    const bodyParameters = {
     key: "value"
    };

    axios
    .post('/books/list/all' ,
      bodyParameters,
      config
    ).then((response)=>{
        const bookApi = [];
        response.data.data.map((item)=>{
            bookApi.push({
                id:item.id,
                name:item.name,

            })
        })
        setBookData(bookApi)
    })
},[])

  return (
    <CoinsContext.Provider value={{ searchValue, setSearchValue ,bookData ,setBookData }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useAppContext = () => useContext(CoinsContext);
export default SearchContext;
