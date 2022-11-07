import "./SearchInput.css";
import Search from "../../../assets/Images/icon/search-normal.svg";
import { useNavigate } from "react-router-dom";
import { React, useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import axios from "axios";

// define search input
const SearchInput = (props) => {
  // define variables, states and refs
  const [inputChange, setInputChanage] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const {
    setSearchValue,
    searchValue,
    setNewData,
    setSorting,
    setSearchData,
    setPrevData,
    newData,
    setAllData
  } = useAppContext();
  // define variables, states and refs -end

  // handle when the input value change
  const inputChangeHandler = (event) => {
    setInputChanage(event.target.value);
  };
  // handle when the input value change - end

  useEffect(() => {
    const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const searchParameters = {
      search: searchValue,
    };
    // api config -end

    // book list data

    axios
      .post("/books/list/all", searchParameters, config)
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
        if (inputChange !== "") {

          console.log('render')
          if (
            bookApi === [] ||
            bookApi === undefined ||
            bookApi.length === 0 ||
            bookApi === null
          ) {
            // setAllData([]);
            setNewData([]);

            navigate("*");
          } else {
            // set book list shown in search page
            setAllData([]);
            navigate("/search");
            setNewData(bookApi);
            setSearchData(bookApi);
          setPrevData(bookApi);
            // save the Data of search in variable
          }
          
        }
      })

      .catch((err) => {
        console.log(err.message);
      });

    // book list data -end
  }, [searchValue]);

  //    show search result page by clicking enter key
  const handleKeyDown = (event) => {
    // e.preventDefault();
    if (event.key === "Enter") {
      setSearchValue(inputRef.current.value);
      // set appied filters to null
      setSorting([]);
      // set appied filters to null -end

     
    }
  };
  //    show search result page by clicking enter key - end

  //    show search result page by clicking on search button
  const handleClick = () => {
    setSearchValue(inputRef.current.value);
    // set appied filters to null
    setSorting([]);
    // set appied filters to null -end

    setAllData([]);
  };
  //    show search result page by clicking on search button - end
  return (
    <div className="search-input-container">
      <input
        id="search-input"
        className="search-input"
        ref={inputRef}
        onChange={inputChangeHandler}
        value={inputChange}
        type="text"
        onKeyDown={(event) => handleKeyDown(event)}
        placeholder={props.placeholder}
      />
      <button className="search-icon" id="button-input" onClick={handleClick}>
        <img src={Search} width="100%" height="100%" alt="search icon" />
      </button>
    </div>
  );
};

// == define search input -end ==

export default SearchInput;
