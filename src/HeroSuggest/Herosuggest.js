import React from "react";
import Toman from '../assets/Images/icon/toman.png';
import './Herosuggest.css';
import Plague from '../assets/Images/Books/Rectangle 13.png';
import { Container, Row, Col } from 'react-bootstrap';
import SuggestHerotitle from "./SuggestHerotitle";
import StyledButton from "../components/UI/Button/Button";
import '../components/UI/Button/Button.css'
import CartImage from '../assets/Images/icon/vuesax-add-to-card.svg'

const Herosuggest = () => {
   return (
      <Container className="container_suggest_book_hero">
         <section className="outest_section_suggest_book_hero">
            <div className="ghasedak_suggestion">
               پیشنهادات قاصدک
            </div>
            <div className="parent_suggest_book_hero">
               <Row>
                  <Col md={6}>
                     <div className="parent_info_book">
                        <div>
                           <span className="font-bold">کتاب:</span>
                           <h5>طاعون</h5>
                        </div>
                        <div>
                           <SuggestHerotitle>نویسنده:</SuggestHerotitle>
                           <h5>آلبرکامو</h5>
                        </div>
                        <div>
                           <SuggestHerotitle>انتشارات:   </SuggestHerotitle>
                           <h5>نشر ایران</h5>
                        </div>
                        <div>
                           <SuggestHerotitle>فروشگاه: </SuggestHerotitle>
                           <h5>کتاب فروشی سیمرغ</h5>
                        </div>
                        <div>
                           <span className="font-bold">قیمت:</span>
                           <h5 className="price_suggest_book">
                              <span className="price_green">20.000</span>
                              <div>
                                 <img src={Toman} alt='img toman' />
                              </div>
                           </h5>
                        </div>
                     </div>
                  </Col>
                  <Col md={6}>
                     <div className="book_pic_suggest">
                        <div>
                           <img src={Plague} alt='book image' />
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
            <div>
               <StyledButton button='btn_add_cart_suggest_book'>
                  <div>
                     <img src={CartImage} alt="img cart" />
                  </div>
                  <span>افزودن به سبد خرید</span>

               </StyledButton>
            </div>
         </section>
      </Container>
   )
}

export default Herosuggest;