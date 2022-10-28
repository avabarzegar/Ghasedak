import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// context
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
// context -end
import "./AvailableProducts.css";

// define available products section
const AvailableProducts = () => {
  // variables and states
  const { bookData, setNewData, available, setAvailable } = useAppContext();
  const navigate = useNavigate();
  // variables and states -end

  // filter the available books
  const availableHandler = () => {
    // handle the show / hide available toggler
    const currentValue = available;
    const updatedValue = !currentValue;
    setAvailable(updatedValue);
    // handle the show / hide available toggler -end
    let previousData = [];
    if (available) {
      // return available book by clicking on button
      let filter = [];
      bookData.map((item) => {
        if (item.available === true) {
          filter.push(item);
        }
      });
      // return available book by clicking on button -end

      // store filter data in variable

      if (
        filter !== [] ||
        filter !== undefined ||
        filter.length !== 0 ||
        filter !== null
      ) {
        navigate("/search");
        // update search data state

        setNewData(filter);
        // update search data state -end
      } else {
        //  if we do not have any filter list
        navigate("*");
        //  if we do not have any filter list
      }
    } else {
      //  if the toggler button be off
      setNewData([]);
      navigate("*");
      //  if the toggler button be off -end
    }
  };
  // filter the available books -end

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
