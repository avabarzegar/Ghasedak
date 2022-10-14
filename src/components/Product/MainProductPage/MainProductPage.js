import React from "react";
import { Col, Row , Container} from "react-bootstrap";
import DetailProductPage from "../DetailProductPage/DetailProductPage";
import ImageProductBook from "../ImageOfproductBook/ImageOfproductBook";
import RelatedBooks from "../IntroductionBook/RelatedBooks/RelatedBooks";
import "./MainProductPage.css";


const MainProductPage = () => {
   return (

      <Container className="parent-section-main-product-page">
         <Row>
            <Col lg={3}>
               <ImageProductBook />
            </Col>
            <Col lg={9}>
               <DetailProductPage />
            </Col>
         </Row>
      </Container>

   )
}


export default MainProductPage;