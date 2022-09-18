import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import InfoBooks from "./BookInfo/InfoBooks";
import BookOffer from "./BookOffer/BookOffer";
import PriceAndDiscount from "./PriceAndDiscount/PriceAndDiscount";
import CircleOffer from "./CircleOffer/CircleOffer";
import Book from '../../assets/Images/Books/image 1.png'
import './Offer.css';

const Offer = () => {
   return (
      <Container className="parent-section-offer">
         <Row>
            <Col xl={4} lg={4} xs={5} className='book-offer-parent'>
               <BookOffer src={Book} />
            </Col>
            <Col xl={3} xs={2} className='parent-discont-component'>
               <PriceAndDiscount />
            </Col>
            <Col xl={5} lg={6} xs={6} className='parent-info-books'>
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