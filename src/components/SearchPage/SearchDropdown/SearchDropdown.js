import { React, useRef, useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import axios from "axios";
import "./SearchDropdown.css";

function CustomDropdown() {
  // states and ref
  const { sorting, setSorting } = useAppContext();
  const [Data, setData] = useState([]);
  const dropdown = useRef(null);
  // states and ref end
  useEffect(() => {
    // getting book data and push them in a variable
    const token = "viBOjqV3gV68hsEmyz8IloLxZejsacji4BdSnF6O";

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
        setData(categories);
      });

    // getting book data and push them in a variable end
  }, []);
  console.log(Data);
  console.log(typeof Data);
  const dropDownHandler = (event, variant) => {
    setSorting((prevState) => [
      ...prevState,
      `${variant} : ${event.target.innerText}`,
    ]);
  };

  return (
    <div className="search-dropdown">
      
      {sorting?.map((variant, index) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant.id}
          id={`dropdown-variants-${variant.title}`}
          variant={variant.title.toLowerCase()}
          title={variant.title}
        >
          <Dropdown.Item
            ref={dropdown}
            onClick={(event) => dropDownHandler(event, variant.title)}
            eventKey={variant.id}
          >
            Action
          </Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
}

export default CustomDropdown;
