import React from 'react';
import '../Footer/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footertitle from './Footertitle';
import FooterSubtitle from './FooterSubtitle';

const Footer = () => {
   return (

      <Container fluid className='parent_section_footer'>
         <Container >
            <Row>
               <Col md={3}>
                  <div className='section_title_links_footer'>
                     <Footertitle>
                        لینک های اصلی
                     </Footertitle>
                     <FooterSubtitle href={'#'}>صفحه اصلی</FooterSubtitle>
                     <FooterSubtitle href={'#'}>فروشگاه ها </FooterSubtitle>
                     <FooterSubtitle href={'#'}> حساب کاربری</FooterSubtitle>                
                  </div>
               </Col>
               <Col md={3}>
                  <div className='section_title_links_footer'>
                     <Footertitle>
                        لینک های کاربردی
                     </Footertitle>
                     <FooterSubtitle href={'#'}> قوانین</FooterSubtitle>
                     <FooterSubtitle href={'#'}> درباره ما </FooterSubtitle>
                     <FooterSubtitle href={'#'}>  سوالات متداول</FooterSubtitle>
                     <FooterSubtitle href={'#'}>   تماس با پشتیبانی</FooterSubtitle>
                  </div>
               </Col>
               <Col md={6}>
                  <div className='section_title_links_footer'>
                     <Footertitle>
                        دانلود اپلیکیشن:
                     </Footertitle>
                     <p className='offer_to_download_app'>شما میتوانید اپلیکیشن قاصدک را از طریق لینک های زیر دربافت و نصب نمایید</p>
                  </div>

               </Col>
            </Row>
         </Container>
      </Container>
   )
}




export default Footer