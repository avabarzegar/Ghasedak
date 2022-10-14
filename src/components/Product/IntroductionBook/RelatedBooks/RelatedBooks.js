import React from "react";
import BookSimpleCard from "../../../BookCard/BookSimpleCard/BookSimpleCard";
import "./RelatedBooks.css";
import Plague from "../../../../assets/Images/Books/Rectangle 12 (1).png";
import Plague2 from "../../../../assets/Images/Books/Rectangle 13 (2).png";
import Plague3 from "../../../../assets/Images/Books/Rectangle 13 (1).png";

const RelatedBooks = () => {
   return (
      <div className="parent-section-related-books">
         <h2>محصولات مرتبط</h2>
         <BookSimpleCard img={Plague} name="طاعون" />
         <BookSimpleCard img={Plague2} name="طاعون بزرگ در فرانسه" />
         <BookSimpleCard img={Plague3} name="طاعون" />
         <BookSimpleCard img={Plague2} name="طاعون" />
         <BookSimpleCard img={Plague} name="طاعون" />
      </div>
   )
}

export default RelatedBooks;