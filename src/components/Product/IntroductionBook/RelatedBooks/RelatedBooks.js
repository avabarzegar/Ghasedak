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

// === mapping swiper slides ===
const ThirdPublisherSlider = (props) => {

   const [slide, setSlide] = useState([]);
   const { setBookId, BookId } = useProductsContext();

   useEffect(() => {
      const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

      const config = {
         headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
         key: "value",
      };

      //    === get slides data from api ===
      axios
         .post("/user/pwa/home", bodyParameters, config)
         .then((response) => {
            const slideData = [];
            response.data.suggestions.data.slice(0, 5).map((item) => {
               slideData.push({
                  id: item.id,
                  name: item.name,
                  image: item.images.data[0].image_url,
                  price: item.best_price,
               });
            });
            setSlide(slideData);
         })
         .catch((err) => {
            console.log(err.message);
         });
      // setBookId('title')

      //    === get slides data from api ===
   }, []);




   return (
      <section>
         <div className="type-two-book-slider-container-outer">
            <span className="span-section-related-books">پیشنهادات قاصدک </span>
            <div className="type-two-book-slider-container">
               {slide.map((item) => {
                  return (
                     // == return swiper slides ==

                     <div className="book-slide-two" key={item.id}>
                        <LinkedCard
                           click={() => setBookId(item.id)}
                           Link={`/products/${item.id}`}
                           name={item.name}
                           img={item.image}
                           price={item.price}
                        />
                     </div>

                     // == return swiper slides end ==
                  );
               })}
            </div>

         </div>
      </section>
   );
};

export default ThirdPublisherSlider;
