import React from "react";
import { Container } from "react-bootstrap";
import Benefitsghasedak from "./Benefitsghasedak/Benefitsghasedak";
import Introduction from "./IntroductionBook/Introduction";
import MainProductPage from "./MainProductPage/MainProductPage";
import './Product.css';
import ProductNavbar from "./ProductNavbar/ProductNavbar";
import Footer from "../Footer/Footer";

const Product = () => {
   return (
      <>
         <ProductNavbar />
         <MainProductPage />
         <Benefitsghasedak />
         <Introduction />
         <Footer />
      </>
   )
}

export default Product;
