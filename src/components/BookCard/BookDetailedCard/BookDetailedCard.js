import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ButtonLayout from '../../UI/Button/ButtonLayout/ButtonLayout';
import Toman from '../../../assets/Images/icon/toman.svg';
import Plague from '../../../assets/Images/Books/Rectangle 13.png';
import CartImage from '../../../assets/Images/icon/vuesax-add-to-card.svg'
import './BookDetailedCard.css';

// === define book card with details ===

const BookDetailedCard = (props) =>{
    return(
        <div className='outest_section_book-cart'>
            <div className='book-card-parent'>
               <Row className='book-card-container'>
                  <Col xs={6}>
                     <div className="parent_info_book">
                        <div>
                           <span className="font-bold">کتاب:</span>
                           <h5>{props.name}</h5>
                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>نویسنده:</span>
                           <h5>{props.author}</h5>
                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>انتشارات:   </span>
                           <h5>{props.publisher}</h5>
                        </div>
                        <div>
                           <span className='book-card-txt font-bold'>فروشگاه: </span>
                           <h5>{props.shop}</h5>
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
                        <img src={Plague} width='100%' height='100%' alt='book image' />
                     </div>
                  </Col>
               </Row>
            </div>
               <ButtonLayout 
               button='purple'
               src={CartImage}
               alt='cart img'
               title='افزودن به سبد خرید'
               />
        </div>
    )
}

// === define book card with details end ===

export default BookDetailedCard;
