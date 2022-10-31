import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// context
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
// context -end
import "./AvailableProducts.css";
import { useEffect } from "react";

// define available products section
const AvailableProducts = () => {
  // variables and states
  const { bookData, setNewData, available, setAvailable, searchData } =
    useAppContext();
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  // variables and states -end

  // filter the available books
  const availableHandler = () => {
    // handle the show / hide available toggler

    setAvailable((current) => !current);
    // handle the show / hide available toggler -end
    let previousData = [];
    if (available === false) {
      // return available book by clicking on button
      // let filter = bookData;
      setFilter(bookData.filter((item) => item.available === true));
      console.log(filter);
      // return available book by clicking on button -end

      if (
        filter === [] ||
        filter === undefined ||
        filter.length === 0 ||
        filter === null
      ) {
        //  if we do not have any filter list
        navigate("*");
      } else {
        // update search data state
        navigate("/search");
        setNewData(filter);
      }
    }
    // else {
    //   //  if the toggler button be off
    //   setNewData(searchData);
    // }
  };
  // filter the available books -end
  // useEffect(() => {
  //   if (
  //     filter === [] ||
  //     filter === undefined ||
  //     filter.length === 0 ||
  //     filter === null
  //   ) {
  //     //  if we do not have any filter list
  //     navigate("*");
  //   } else {
  //     // update search data state
  //     navigate("/search");
  //     setNewData(filter);
  //   }
  // },[filter]);
  return (
    <div className="available-products">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="نمایش کتاب های موجود"
          onClick={availableHandler}
        />
      </Form>
    </div>
  );
};
// define available products section -end

export default AvailableProducts;
