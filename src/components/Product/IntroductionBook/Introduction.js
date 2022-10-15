import React from "react";
import { Container, Row , Col } from "react-bootstrap";
import IntroBooks from "./IntroBooks/IntroBooks";
import "./Introduction.css";
import RelatedBooks from "./RelatedBooks/RelatedBooks";


const Introduction = () => {
   return (
      <Container>
         <Row className="row-introduction-section">
            <Col lg={3}>
               <RelatedBooks />
            </Col>
            <Col lg={9}>
               <IntroBooks />
            </Col>
         </Row>
      </Container>
   )
}

export default Introduction;