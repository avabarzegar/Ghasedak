// Import Swiper React components
import { React, useState, useEffect, useRef, useCallback } from "react";
import Col from "react-bootstrap/Col";
import axios from "axios";
import LinkedCard from "../../../LinkedCard/LinkedCard";
import "./RelatedBooks.css"

import "../../../ThirdPublisherSlider/ThirdPublisherSlides/ThirdPublisherSlides";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { useProductsContext } from "../../../../Context/ProductContext/ProductContext";
import { useHomeContext } from "../../../../Context/HomeContext/HomeContext";

// === mapping swiper slides ===
const ThirdPublisherSlider = (props) => {

   const [slide, setSlide] = useState([]);
   const { setBookId, BookId } = useProductsContext();
   const { suggestSlider } = useHomeContext();

   return (
      <section>
         <div className="type-two-book-slider-container-outer">
            <span className="span-section-related-books">پیشنهادات قاصدک </span>
            <div className="type-two-book-slider-container">
               {suggestSlider.slice(0 , 5).map((item) => {
                  return (

                     <div className="book-slide-two" key={item.id}>
                        <LinkedCard
                           click={() => setBookId(item.id)}
                           Link={`/books/${item.id}`}
                           name={item.name}
                           img={item.image?item.image:null}
                           price={item.price}
                        />
                     </div>

                  );
               })}
            </div>

         </div>
      </section>
   );
};

export default ThirdPublisherSlider;
