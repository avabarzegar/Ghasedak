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
  // const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  // variables and states -end

  // filter the available books
  const availableHandler = () => {
    // handle the show / hide available toggler

    setAvailable((current) => !current);

    // handle the show / hide available toggler -end
  };
  useEffect(() => {
    if (available === true) {
      // return available book by clicking on button
      let filter = bookData;
      filter = bookData.filter((item) => item.available === true);
      // return available book by clicking on button -end
      setNewData(filter);
      navigate("/search");
    } else {
      setNewData(searchData);
      if (searchData.length === 0) {
        // navigate("*");
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
          onClick={availableHandler}
        />
      </Form>
    </div>
  );
};
// define available products section -end

export default AvailableProducts;
