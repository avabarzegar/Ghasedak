import React from "react";
import Form from "react-bootstrap/Form";
import "./AvailableProducts.css";

// define available products section
const AvailableProducts = () => {
  return (
    <div className="available-products">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="نمایش کالاهای موجود"
        />
      </Form>
    </div>
  );
};
// define available products section -end

export default AvailableProducts;
