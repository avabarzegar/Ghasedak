import "./SearchInput.css";
import Search from "../../../assets/Images/icon/search-normal.svg";
import { useNavigate } from "react-router-dom";
import { React, useRef, useState } from "react";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";

// define search input
const SearchInput = (props) => {
  // define variables, states and refs
  const [inputChange, setInputChanage] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const {
    setSearchValue,
    bookData,
    setNewData,
    newData,
    setSorting,
    searchData,
    setSearchData,
  } = useAppContext();

  // define variables, states and refs end

  // handle when the input value change
  const inputChangeHandler = (event) => {
    setInputChanage(event.target.value);
  };
  // handle when the input value change - end

  //    show search result page by clicking enter key

  let DataBook;
  const handleKeyDown = (event) => {
    // e.preventDefault()
    if (event.key === "Enter") {
      setSearchValue(inputRef.current.value);

      // set appied filters to null
      setSorting([]);

      // set appied filters to null -end

      DataBook = bookData;
      if (inputChange) {
        DataBook = bookData.filter((items) =>
          items.name.toLowerCase().includes(inputChange, 0)
        );
        navigate("/search");

        // set book list shown in search page
        setNewData(DataBook);
        // set book list shown in search page -end

        // save the Data of search in variable
        setSearchData(DataBook);
        // save the Data of search in variable
      }
      if (
        DataBook === [] ||
        DataBook === undefined ||
        DataBook.length === 0 ||
        DataBook === null
      ) {
        navigate("*");
      }
    }
  };
  console.log(newData)

  // console.log(searchData);
  //    show search result page by clicking enter key - end

  //    show search result page by clicking on search button
  const handleClick = () => {
    setSearchValue(inputRef.current.value);

    // set appied filters to null
    setSorting([]);

    // set appied filters to null -end

    DataBook = bookData;
    if (inputChange) {
      DataBook = bookData.filter((items) =>
        items.name.toLowerCase().includes(inputChange, 0)
      );
      navigate("/search");
      // set book list shown in search page
      setNewData(DataBook);
      // set book list shown in search page -end

      // save the Data of search in variable
      setSearchData(DataBook);
      // save the Data of search in variable
    }
    if (
      DataBook === [] ||
      DataBook === undefined ||
      DataBook.length === 0 ||
      DataBook === null
    ) {
      navigate("*");
    }
  };
  //    show search result page by clicking on search button - end
  console.log(newData)

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        ref={inputRef}
        onChange={inputChangeHandler}
        value={inputChange}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={props.placeholder}
      />
      <button className="search-icon" onClick={handleClick}>
        <img src={Search} width="100%" height="100%" alt="search icon" />
      </button>
    </div>
  );
};

// == define search input -end ==

export default SearchInput;
