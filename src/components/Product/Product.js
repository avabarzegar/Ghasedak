import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Benefitsghasedak from "./Benefitsghasedak/Benefitsghasedak";
import Introduction from "./IntroductionBook/Introduction";
import MainProductPage from "./MainProductPage/MainProductPage";
import "./Product.css";
import ProductNavbar from "./ProductNavbar/ProductNavbar";
import { useProductsContext } from "../../Context/ProductContext/ProductContext";

import Footer from "../Footer/Footer";

const Product = (props) => {
  const { bookId } = useParams();
  const { setBookId } = useProductsContext();

  useEffect(() => {
    setBookId(bookId);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductNavbar />
      <MainProductPage />
      <Benefitsghasedak />
      <Introduction />
      <Footer />
    </>
  );
};

export default Product;
