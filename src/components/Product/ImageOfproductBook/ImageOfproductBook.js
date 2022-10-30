import { Container } from "react-bootstrap";
import PlagueImage from "../../../assets/Images/Books/Rectangle 13.png";
import StartRating from "../../../assets/Images/icon/start-rating.svg";
import "./ImageOfproductBook.css";
import { useProductsContext } from "../../../Context/ProductContext/ProductContext";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";




const ImageProductBook = () => {
   const [slide, setSlide] = useState([]);

   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const { products, BookId, product, setProduct } = useProductsContext();

   useEffect(() => {
      products.map((item) => {
         if (item.name === BookId) {
            setProduct(item);
         }
      });



   }, [BookId]);

   return (

      <section>
         <div className="parent-section-img-product-book">
            <Swiper
               style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
               }}
               spaceBetween={10}
               navigation={true}
               thumbs={{ swiper: thumbsSwiper }}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper2"
            >

               <SwiperSlide >
                  <img src={product.img} className="BookNameProduct_img" />
               </SwiperSlide>



            </Swiper>
            {/* <Swiper
               onSwiper={setThumbsSwiper}
               spaceBetween={10}
               slidesPerView={4}
               freeMode={true}
               watchSlidesProgress={true}
               modules={[FreeMode, Navigation, Thumbs]}
               className="mySwiper"
            >
               
                     <SwiperSlide >
                        <img src={product.img} className="BookNameProduct_img" />
                     </SwiperSlide>
               
            </Swiper> */}
         </div>
      </section>

   )
}

export default ImageProductBook;