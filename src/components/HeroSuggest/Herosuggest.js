import React, { useState, useEffect } from "react";
import './Herosuggest.css';
import '../../components/UI/Button/Button.css';
import BookDetailedCard from "../../components/BookCard/BookDetailedCard/BookDetailedCard";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";








const Herosuggest = () => {


   const [detail, setDetail] = useState([]);
   const [swiperRef, setSwiperRef] = useState();




   useEffect(() => {
      const token = 'DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek';

      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };

      const bodyParameters = {
         key: "value"
      };


      //    === get slides data from api ===
      axios.post(
         '/user/pwa/home',
         bodyParameters,
         config
      ).then((response) => {

         const detailData = [];
         const imgDetailData = [];
         response.data.suggestions.data.map((item) => {
            detailData.push({
               id: item.id,
               name: item.name,
               author: item.authors,
               publisher: item.publisher,
               image: item.images.data[0].image_url,
               price: item.best_price,
               edition: item.edition,
            })

         })


         setDetail(detailData)

      })
         .catch((err) => {
            console.log(err.message)
         })



      //    === get slides data from api ===

   }, [])
   return (
      <section className="outest_section_suggest_book_hero">
         <div className="ghasedak_suggestion">
            پیشنهادات قاصدک
         </div>
         {/* <Swiper
            className="book-swiper"
            modules={[Navigation, Autoplay]}
            onSwiper={setSwiperRef}
            autoplay={{ delay: 2000 }}
            slidesPerGroup={1}

            scrollbar={{
               el: ".swiper-scrollbar",
               draggable: true,
            }}
            breakpoints={{
               0: {
                  slidesPerView: 1,
               },
               576: {
                  slidesPerView: 1,
               },

               768: {
                  slidesPerView: 1,
               },

               992: {
                  slidesPerView: 1,
               },

               1200: {
                  slidesPerView: 1,
               },

               1400: {
                  slidesPerView: 1,
               },
            }}
         > */}
            {detail.map((item, index) => {
               if (index === 1) {
                  return (
                     // <SwiperSlide  key={item.id}>
                     
                        <BookDetailedCard author={item.author} key={item.id} name={item.name} edition={item.edition} price={item.price} publisher={item.publisher} image={item.image} alt={"book img"} />
                     // </SwiperSlide>
                  )
               }

            })}
         {/* </Swiper> */}
      </section>
   )
}

export default Herosuggest;