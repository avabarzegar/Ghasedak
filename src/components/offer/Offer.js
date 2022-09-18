import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import InfoBooks from "./bookinfo/InfoBooks";
import BookOffer from "./BookOffer/BookOffer";
import PriceandDiscount from "./pricediscount/PriceandDiscount";
import CircleOffer from "./circleoffer/CircleOffer";
import Book from '../../assets/Images/Books/image 1.png'
import './Offer.css';

const Offer = () => {
   return (
      <Container className="parent-section-offer">
         <Row>
            <Col md={4}>
               <BookOffer src={Book} />
            </Col>
            <Col md={3} className='parent-discont-component'>
               <PriceandDiscount />
            </Col>
            <Col md={5} className='parent-info-books'>
               <InfoBooks />
            </Col>
         </Row>
         <CircleOffer>
            %50
         </CircleOffer>
      </Container>
   )



}

export default Offer;