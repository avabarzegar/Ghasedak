import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import "./AvailableProducts.css";

// define available products section
const AvailableProducts = () => {
  // variables and states
  const { bookData, setNewData, available, setAvailable } = useAppContext();

  const [prevBooks, setPrevBooks] = useState([]);
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
        if (item.available === false) {
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

        setNewData((prevState) => {
          setPrevBooks(prevState);
          console.log(prevState);
          return filter;
        });
        // update search data state -end
      } else {
        navigate("*");
      }
    } else {
      console.log(prevBooks);
      setNewData(prevBooks);
    }
    console.log(available);
  };
  // filter the available books -end

  return (
    <div className="available-products">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="نمایش کالاهای موجود"
          onClick={availableHandler}
        />
      </Form>
    </div>
  );
};
// define available products section -end

export default AvailableProducts;
