import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoinsContext = createContext({});

const SearchContext = ({ children }) => {
  //   define states and variables
  const [searchValue, setSearchValue] = useState(" ");
  const [searchFilter , setSearchFilter] =useState(" ");
  const [bookData, setBookData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newData, setNewData] = useState([]);
  const [translators, setTranslators] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  //   define states and variables end

  useEffect(() => {
    // api config
    const token = "viBOjqV3gV68hsEmyz8IloLxZejsacji4BdSnF6O";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };
    // api config -end

    // book list data
    axios
      .post("/books/list/all", bodyParameters, config)
      .then((response) => {
        const bookApi = [];
        response.data.data.map((item) => {
          bookApi.push({
            id: item.id,
            name: item.name,
            img: item.images.data[0].image_url,
            category: item.categories,
            author: item.authors,
            translator: item.translators,
            hashtag: item.hashtags,
          });
        });
        setBookData(bookApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book list data -end
console.log(bookData)
    // book  category list
    axios
      .post("/categories/list/all", bodyParameters, config)
      .then((response) => {
        const categoriesData = [];
        response.data.data.map((item) => {
          return categoriesData.push({
            title: "دسته بندی",
            id: item.id,
            name: item.title,
          });
        });
        setCategories(categoriesData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book  category list -end

    // book author list
    axios
      .post("/authors/list/all", bodyParameters, config)
      .then((response) => {
        const authorsData = [];
        response.data.data.map((item, index) => {
          return authorsData.push({
            title: "نویسندگان",
            id: index,
            name: item.name,
          });
        });
        setAuthors(authorsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book author list -end

    // book translators list
    axios
      .post("/translators/list/all", bodyParameters, config)
      .then((response) => {
        const translatorsData = [];
        response.data.data.map((item, index) => {
          return translatorsData.push({
            title: "مترجمان",
            id: index,
            name: item.name,
          });
        });
        setTranslators(translatorsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book translators list -end

    // book hashtags list
    axios
      .post("/hashtags/list/all", bodyParameters, config)
      .then((response) => {
        const hashtagsData = [];
        response.data.data.map((item, index) => {
          return hashtagsData.push({
            title: "برچسب ها",
            id: index,
            name: item.keyword,
          });
        });
        console.log(hashtagsData);
        setHashtags(hashtagsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book hashtags list -end
  }, []);
  console.log(sorting);
  return (
    <CoinsContext.Provider
      value={{
        newData,
        searchFilter,
        setSearchFilter,
        setNewData,
        searchValue,
        setSearchValue,
        bookData,
        setBookData,
        sorting,
        setSorting,
        categories,
        authors,
        translators,
        hashtags,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useAppContext = () => useContext(CoinsContext);
export default SearchContext;
