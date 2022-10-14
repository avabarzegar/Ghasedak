import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertImage from "../../../assets/Images/icon/alert_product_page.svg";
import "./AlertProductPage.css"

const AlertProductPage = () => {
   return ( 
      <Container>
         <Link className="alertproductpage_parent_section" >
            <img src={AlertImage} alt="alert-image" />
            <span>گزارش / تصحیح خطا</span>
         </Link>
         
      </Container>
   )
}

export default AlertProductPage;