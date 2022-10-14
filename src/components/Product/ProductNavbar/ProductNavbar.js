import React from "react";
import AlertProductPage from "../AlertProductPage/AlertProductPage";
import BookNameProduct from "../BookNameProduct/BookNameProduct";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadcrumb from "../../UI/Breadcrumb/Breadcrumb";
import Navbar from "../../Navigation/Navbar/Navbar";
import "./ProductNavbar.css";
import BookIconProduct from '../../../assets/Images/icon/book-icon-product.svg';


const ProductNavbar = () => {
   return (
      <>
         <Navbar />

         <Container fluid className="container-fluid-product-navbar">
            <Container  className="Product_nav_parent">
               <Row  >
                  <Col xs={12} lg={3}><CustomBreadcrumb breadcrumbcontainercustomstyle="breadcrumb-container_custom_style" CustomBreadcrumbStyle="BreadCrumpStyle" activeImage={BookIconProduct} activeText="محصولات" /></Col>
                  <Col xs={12} lg={5} ><BookNameProduct /></Col>
                  <Col xs={12} lg={4}><AlertProductPage /></Col>
               </Row>
            </Container>
         </Container>
      </>
   )


}

export default ProductNavbar;