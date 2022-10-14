import React from "react";
import { Container } from "react-bootstrap";
import MainProductPage from "./MainProductPage/MainProductPage";
import './Product.css';
import ProductNavbar from "./ProductNavbar/ProductNavbar";


const Product = () => {
   return (
      <>
         <ProductNavbar />
         <MainProductPage />
      </>
   )
}

export default Product;
