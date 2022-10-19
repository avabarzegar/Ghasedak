import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoinsContext = createContext({});

const SearchContext = ({ children }) => {
  //   define states and variables
  const [searchValue, setSearchValue] = useState(" ");
  const [bookData, setBookData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [newData, setNewData] = useState([]);
  //   define states and variables end

  useEffect(() => {
    // getting book data and push them in a variable
    const token = "viBOjqV3gV68hsEmyz8IloLxZejsacji4BdSnF6O";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    axios.post("/books/list/all", bodyParameters, config).then((response) => {
      const bookApi = [];
      response.data.data.map((item) => {
        bookApi.push({
          id: item.id,
          name: item.name,
          img: item.images.data[0].image_url,
        });
      });
      setBookData(bookApi);

    });
    axios
    .post("/categories/list/all", bodyParameters, config)
    .then((response) => {
      const categories = [];
      response.data.data.map((item) => {
        return categories.push({
          id: item.id,
          title: item.title,
        });
      });
      console.log(categories)
      setSorting(categories);
    });

    // getting book data and push them in a variable end
  }, []);
  console.log(typeof(bookData));
  return (
    <CoinsContext.Provider
      value={{
        newData,
        setNewData,
        searchValue,
        setSearchValue,
        bookData,
        setBookData,
        sorting,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useAppContext = () => useContext(CoinsContext);
export default SearchContext;
