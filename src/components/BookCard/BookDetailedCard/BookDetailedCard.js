import React, { useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ButtonLayout from '../../UI/Button/ButtonLayout/ButtonLayout';
import Toman from '../../../assets/Images/icon/toman.svg';
// import Plague from '../../../assets/Images/Books/Rectangle 13.png';
import CartImage from '../../../assets/Images/icon/vuesax-add-to-card.svg'
import './BookDetailedCard.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

// === define book card with details ===

const BookDetailedCard = (props) => {
   const nameRef = useRef(null);
   const authorRef = useRef(null);
   const publisherRef = useRef(null);
   // define tooltip for book name showing by hovering 
   const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
         {nameRef.current.innerHTML}
         {authorRef.current.innerHTML}
      </Tooltip>
   );
   const renderTooltip2 = (props) => (
      <Tooltip id="button-tooltip2" {...props}>
         {authorRef.current.innerHTML}
      </Tooltip>
   );
   const renderTooltip3 = (props) => (
      <Tooltip id="button-tooltip3" {...props}>
         {publisherRef.current.innerHTML}
      </Tooltip>
   );
   // define tooltip for book name showing by hovering end
  
      const alertshow = () => {
        alert("میتوانید برای خرید کتاب از طریق اپلیکیشن قاصدک اقدام کنید");
      }
   return (
      <div className='outest_section_book-cart'>
         <Link to={props.Link}>
            <div className='book-card-parent' onClick={props.onClick}>
               <Row className='book-card-container'>
                  <Col xs={6}>
                     <div className="parent_info_book">
                        <div>
                           <span className="font-bold">کتاب:</span>
                           <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                           >
                              <h5 ref={nameRef}>{props.name}</h5>
                           </OverlayTrigger>
                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>نویسنده:</span>
                           <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip2}
                           >
                              <h5 ref={authorRef}>{props.author}</h5>
                           </OverlayTrigger>

                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>انتشارات:   </span>
                           <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip3}
                           >
                              <h5 ref={publisherRef}>{props.publisher}</h5>
                           </OverlayTrigger>
                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>نسخه: </span>
                           <h5>{props.edition}</h5>
                        </div>
                        <div>
                           <span className="font-bold">قیمت:</span>
                           <h5 className="price_suggest_book">
                              <span className="price_green">{props.price}</span>
                              <div>
                                 <img src={Toman} width='100%' height='100%' alt='img toman' />
                              </div>
                           </h5>
                        </div>
                     </div>
                  </Col>
                  <Col xs={6}>
                     <div className="book_pic_suggest">
                        <img src={props.image} width='100%' height='100%' alt={props.alt} />
                     </div>
                  </Col>
               </Row>
            </div>
         </Link>
         <ButtonLayout
            button='purple'
            src={CartImage}
            alt='cart img'
            title='افزودن به سبد خرید'
            onClick={alertshow}
         />
      </div>
   )
}

// === define book card with details end ===

export default BookDetailedCard;
