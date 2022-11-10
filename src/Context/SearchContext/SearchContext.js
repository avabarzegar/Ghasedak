import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoinsContext = createContext({});

const SearchContext = ({ children }) => {
  //   define states and variables
  const [searchValue, setSearchValue] = useState(" ");
  const [searchData, setSearchData] = useState([]);
  const [searchFilter, setSearchFilter] = useState(" ");
  const [bookData, setBookData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [newData, setNewData] = useState([]);
  const [allFilter, setAllFilter] = useState([]);
  const [translators, setTranslators] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [available, setAvailable] = useState(false);
  const [productHashtag, setProductHashtag] = useState([]);
  const [allData, setAllData] = useState([]);
  const [prevData, setPrevData] = useState([]);
  const [clickData, setClickData] = useState([]);


  //   define states and variables end

 

  useEffect(() => {
    // api config
    const token = "nOe0ikqnjPSF1AgE9tjHt5jEZi8qQ3Iz6RW7hV5c";

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
            img: item.images.data,
            category: item.categories,
            author: item.authors,
            translator: item.translators,
            hashtag: item.hashtags,
            price: item.best_price,
            available: item.is_available,
            publisher: item.publisher,
          });
        });
        setBookData(bookApi);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book list data -end


    // book  category list
    axios
      .post("/categories/list/all", bodyParameters, config)
      .then((response) => {
        const categoriesData = [];
        categoriesData.push("دسته بندی");
        response.data.data.map((item) => {
          return categoriesData.push({
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
        authorsData.push("نویسندگان");
        response.data.data.map((item, index) => {
          return authorsData.push({
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
        translatorsData.push("مترجمان");
        response.data.data.map((item, index) => {
          return translatorsData.push({
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
        hashtagsData.push("برچسب ها");
        response.data.data.map((item, index) => {
          return hashtagsData.push({
            id: index,
            name: item.keyword,
          });
        });
        setHashtags(hashtagsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book hashtags list -end
    // book author list
    axios
      .post("/publishers/list/all", bodyParameters, config)
      .then((response) => {
        const publishersData = [];
        publishersData.push("ناشران");
        response.data.data.map((item, index) => {
          return publishersData.push({
            id: index,
            name: item.name,
          });
        });
        setPublishers(publishersData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book author list -end
  }, []);

  return (
    <CoinsContext.Provider
      value={{
        newData,
        setNewData,
        searchData,
        setSearchData,
        selectedData,
        setSelectedData,
        setSelectedTitle,
        selectedTitle,
        searchFilter,
        setSearchFilter,
        allFilter,
        setAllFilter,
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
        publishers,
        available,
        setAvailable,
        productHashtag,
        setProductHashtag,
        allData,
        setAllData,
        prevData,
        setPrevData,
        clickData, 
        setClickData
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useAppContext = () => useContext(CoinsContext);
export default SearchContext;
