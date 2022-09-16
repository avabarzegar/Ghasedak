import React from "react";
import './BookOffer.css';


const BookOffer = (props) => {
   return (
      <div className="parent-section-bookoffer">
         <img src={props.src} alt={props.alt} />
      </div>
   )
}

export default BookOffer;