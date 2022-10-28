import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// define a context for filters applied on search
const FiltersContext = createContext({});

const SearchAFilter = (props) => {
  // define states
  const [sorting, setSorting] = useState([]);
  const [producer, setProducer] = useState([]);

  // define states end
  useEffect(() => {
    // getting book data and push them in a variable
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };
    // axios.post("/books/list/all", bodyParameters, config).then((response) => {
    //   const categories = [];
    //   response.data.data.map((item) => {
    //     categories.push({
    //       id: item.id,
    //       name: item.name,
    //       img: item.images.data[0].image_url,
    //     });
    //   });
    //   setSorting(categories);
    // });
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
  console.log(sorting);
  console.log(typeof(sorting))
  return (
    <FiltersContext.Provider value={{ sorting, setSorting, setProducer }}>
      {props.children}
    </FiltersContext.Provider>
  );
};
// define a context for filters applied on search end

export const useFiltersContext = () => useContext(FiltersContext);
export default SearchAFilter;
