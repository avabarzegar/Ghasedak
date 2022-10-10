import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const CoinsContext = createContext({});

const SearchContext = ({ children }) => {

  //   define states and variables
  const [searchValue, setSearchValue] = useState(' ');
  const [bookData , setBookData ] = useState([]);
  const [newData , setNewData] = useState([]);
  //   define states and variables end

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
    .post('/application/home' ,
      bodyParameters,
      config
    ).then((response)=>{
        const bookApi = [];
        response.data.book_lists[0].books.data.map((item)=>{
          bookApi.push({
              id:item.id,
              name:item.name,
              img:item.images.data[0].image_url,
            })
          
        })
        setBookData(bookApi)
       
    })
   
    // getting book data and push them in a variable end

  },[])

  return (
    <CoinsContext.Provider value={{ newData , setNewData, searchValue, setSearchValue ,bookData ,setBookData }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useAppContext = () => useContext(CoinsContext);
export default SearchContext;
