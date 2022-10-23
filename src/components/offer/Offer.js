import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import InfoBooks from "./bookinfo/InfoBooks";
import Book from '../../assets/Images/Books/image 1.png'
import './Offer.css';

const Offer = () => {
   return (
      <Container className="parent-section-offer">
         
            <div className='parent-info-books'>
               <InfoBooks />
            </div>
      </Container>
   )



}

export default Offer;