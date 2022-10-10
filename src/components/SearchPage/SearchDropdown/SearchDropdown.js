import {React , useRef} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useFiltersContext } from "../../../Context/FilterContext/FilterContext";
import "./SearchDropdown.css";


function CustomDropdown() {

  // states and ref
  const {sorting,setSorting} =useFiltersContext();
  const dropdown=useRef(null);
  // states and ref end

  const dropDownHandler=(event,variant)=>{
    setSorting(prevState =>(
      [...prevState,
      `${variant} : ${event.target.innerText}`]
    ))
  }

  return (
    <div className="search-dropdown">
      {["دسته بندی", "تولید کننده", "برچسب", "مترجم", "نویسنده", "ژانر"].map(
        (variant,index) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item ref={dropdown} onClick={(event)=>dropDownHandler(event,variant)} eventKey={index}>Action</Dropdown.Item>
          </DropdownButton>
        ),
      )}
    </div>
  );
}

export default CustomDropdown;