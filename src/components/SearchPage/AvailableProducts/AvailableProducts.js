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
  const {
    bookData,
    setNewData,
    available,
    setAvailable,
    prevData,
  } = useAppContext();
  const navigate = useNavigate();
  // variables and states -end

  // filter the available books
  const availableHandler = () => {
    // handle the show / hide available toggler

    setAvailable((current) => !current);

    // handle the show / hide available toggler -end
  };
  useEffect(() => {
    // setPrevData(newData);
    if (available) {
      if (available === true) {
        // return available book by clicking on button
        let filter = bookData;
        filter = bookData.filter((item) => item.available === true);
        // return available book by clicking on button -end
        if (filter && filter.length > 0) {
        setNewData(filter);
        navigate("/search");
        } else {
          setNewData([]);
          navigate("*");
        }
      } else {
        if (prevData.length === 0) {
          setNewData([]);
          navigate("*");
        } else {
          setNewData(prevData);
          navigate("/search");
        }
      }
    }
  }, [available]);
  return (
    <div className="available-products">
      <Form>
        <Form.Check
          checked={available}
          type="switch"
          id="custom-switch"
          label="نمایش کتاب های موجود"
          onChange={availableHandler}
        />
      </Form>
    </div>
  );
};
// define available products section -end

export default AvailableProducts;
