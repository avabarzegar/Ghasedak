import React from "react";
import { Container } from "react-bootstrap";
import PlagueImage from "../../../assets/Images/Books/Rectangle 13.png";
import StartRating from "../../../assets/Images/icon/start-rating.svg";
import "./ImageOfproductBook.css";


const ImageProductBook = () => {
   return (
      <div className="parent-section-img-product-book">
         <div className="outer-section-img-and-rating">
            <div className="parent-section-rating-book">
               <span>4.5/5</span>
               <img src={StartRating} alt="image-of-star" />
            </div>
            <img src={PlagueImage} className="img-book-info" alt="image-of-book" />
         </div>
         <div className="small-images-of-books">
            <img src={PlagueImage} alt="image-of-book" />
            <img src={PlagueImage} alt="image-of-book" />
         </div>
      </div>

   )
}

export default ImageProductBook;