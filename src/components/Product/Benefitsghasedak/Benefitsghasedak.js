import React from "react";
import Imagetitlebenefits from "./Imagetitlebenefits/Imagetitlebenefits";
import HeadPhone from "../../../assets/Images/icon/headphone-product.svg";
import Quality from "../../../assets/Images/icon/qulity.svg";
import ReturnBook from "../../../assets/Images/icon/return-book.svg";
import SafePay from "../../../assets/Images/icon/safe-pay.svg";
import { Container, Row , Col } from "react-bootstrap";
import "./Benefitsghasedak.css";


const Benefitsghasedak = () => {
   return (
      <Container >
         <Row className="parent-section-benefit-ghasedak">
            <Col xs={12} sm={6} md={6} lg={6} xl={3} >
               <Imagetitlebenefits src={HeadPhone} alt="headphoe image" ImageTitle="پشتیبانی 24 ساعته" />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={3}>
               <Imagetitlebenefits imageBenefit="margin-t-second-child" src={Quality} alt="headphoe image" ImageTitle=" تضمین کیفیت کالا " />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={3}>
               <Imagetitlebenefits imageBenefit="third-child margin-t" src={ReturnBook} alt="headphoe image" ImageTitle=" فرصت 7 روزه بازگشت کالا " />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={3}>
               <Imagetitlebenefits imageBenefit="fourth-child margin-t " src={SafePay} alt="headphoe image" ImageTitle="پرداخت امن" />
            </Col>
         </Row>


      </Container>

   )
}

export default Benefitsghasedak;