import { React, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./SearchDropdown.css";
import { useState } from "react";

function CustomDropdown() {
  // states and ref
  const {
    searchFilter,
    setSelectedData,
    selectedData,
    categories,
    setSorting,
    sorting,
    authors,
    translators,
    hashtags,
    newData,
    setNewData,
    bookData,
  } = useAppContext();
  const navigate = useNavigate();
  const [bookFilter, setBookFilter] = useState([]);
  const dropdown = useRef(null);
  // states and ref end

  // filter title list array
  const filterList = [categories, authors, translators, hashtags];
  // filter title list array -end

  let filters = [];
  console.log(newData);
  useEffect(() => {
    newData.map((item) => {
      return filters.push(
          item.category, item.author, item.translator, item.hashtag
        )
    });
    setBookFilter(filters);
    console.log(filters);
    
  }, []);

  let filter;
  let updatedFilter = newData;
  const dropDownHandler = (event, items) => {
    const eventData = event.target.innerText;
    setSelectedData((prevState) => [...prevState, eventData]);
    // add a filter to list
    setSorting((prevState) => [...prevState, `${items} : ${eventData}`]);
    // add a filter to list -end
  
    // apply selected filter to the search result
   
    if (eventData) {
      console.log(filter);

      filter = bookFilter.filter((item) => {
        console.log(item);
        item.map((i) => {
          return i.includes(eventData, 0);
        });
      });
      console.log(filter);
      if (filter) {
        updatedFilter = newData.filter((item) => {
          return item.includes(filter, 0);
        });
      }
      // filter = newData.filter((item) => {
      //   item.author[0].includes(selectedData, 0);

      //   console.log(item.author[0]);
      // });
      // .filter((items) => {
      //   items.name.toLowerCase().includes(searchFilter, 0);
      // })

      // .filter((item) => {
      //   item.hashtag.map((i) => {
      //     i.includes(selectedData, 0);
      //   });
      // });
      setNewData(updatedFilter);
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
