import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import BookPlague from "../../../assets/Images/Books/Rectangle 13.png";
import './BookNameProduct.css';

import { useProductsContext } from "../../../Context/ProductContext/ProductContext";

const BookNameProduct = () => {
   const { product } = useProductsContext();

   return (
      <Container className="BookNameProduct_parent_section">
         {product.img ? product.img.slice(0 , 1).map((item, index) => (
            
               <img src={item.image_url} key={index + 2} className="BookNameProduct_img" />
            
         )) : <p>عکسی برای این محصول وجود ندارد</p>}
         <div>
            <span>کتاب :</span>
            <span>{product.name}</span>
         </div>
      </Container>
   )

}

export default BookNameProduct;