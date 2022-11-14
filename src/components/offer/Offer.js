import React from "react";
import { Container } from "react-bootstrap";
import InfoBooks from "./bookinfo/InfoBooks";
import "./Offer.css";

const Offer = () => {
  return (
    <Container className="parent-section-offer">
      <div className="parent-info-books">
        <InfoBooks />
      </div>
    </Container>
  );
};

export default Offer;
