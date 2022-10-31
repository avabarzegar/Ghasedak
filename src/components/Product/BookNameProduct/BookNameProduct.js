import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import BookPlague from "../../../assets/Images/Books/Rectangle 13.png";
import './BookNameProduct.css';

import { useProductsContext } from "../../../Context/ProductContext/ProductContext";

const BookNameProduct = (porps) => {
   const { products, BookId, product, setProduct } = useProductsContext();
   // const [product, setProduct] = useState({});


   useEffect(() => {
      products.map((item) => {
         if (item.name === BookId) {
            setProduct({
               id: item.id,
               name: item.name,
               img: item.img,
               category: item.category,
               author: item.author,
               translator: item.translator,
               hashtag: item.hashtag,
               price: item.price,
               available: item.available,
               publisher: item.publisher,
            });
         }
      });


   }, [BookId]);
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