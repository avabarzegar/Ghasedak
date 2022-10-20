import { React, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";

function CustomDropdown() {
  // states and ref
  const {
    searchFilter,
    categories,
    setSorting,
    sorting,
    authors,
    translators,
    hashtags,
    newData,
    setNewData,
    bookData
  } = useAppContext();
  const navigate = useNavigate();
  const dropdown = useRef(null);
  // states and ref end

  // filter title list array
  const filterList = [categories, authors, translators, hashtags];
  // filter title list array -end
  // const bookFilter = [
  //   newData.category,
  //   newData.author,
  //   newData.translator,
  //   newData.hashtag,
  // ];

  let filter = newData;

  const dropDownHandler = (event, items) => {
    // add a filter to list
    setSorting((prevState) => [
      ...prevState,
      `${items} : ${event.target.innerText}`,
    ]);
    // add a filter to list -end

    // apply selected filter to the search result

    if (event.target.innerText) {
      filter = bookData
      .filter((items) =>
          items.name.toLowerCase().includes(searchFilter, 0)
        )
        .filter((item) =>
          item.author[0].includes(event.target.innerText, 0)
        )
        .filter((item) =>
          item.hashtag.includes(event.target.innerText, 0)
        );
      // .filter((item) =>
      //   item.toLowerCase().includes(event.target.innerText, 0)
      // )
      // .filter((item) =>
      //   item.toLowerCase().includes(event.target.innerText, 0)
      // );
     
      navigate("/search");
       console.log(filter);
    }
    if (
      filter === [] ||
      filter === undefined ||
      filter.length === 0 ||
      filter === null
    ) {
      navigate("*");
    }
   
    // apply selected filter to the search result -end
  };
  useEffect(() => {
    setNewData(filter);
  }, []);
  console.log(newData);
  console.log(sorting);
  return (
    <div className="search-dropdown">
      {filterList.map((items, index) => (
        <DropdownButton
          as={ButtonGroup}
          key={index}
          id={`dropdown-variants-${items}`}
          variant={items[0].title}
          title={items[0].title}
        >
          {items.map((item, index) => (
            <Dropdown.Item
              ref={dropdown}
              onClick={(event) => dropDownHandler(event, item.title)}
              // eventKey={item.id + items}
              key={item.id + items}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      ))}
    </div>
  );
}

export default CustomDropdown;
