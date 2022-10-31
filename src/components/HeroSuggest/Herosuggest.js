import React, { useState, useEffect } from "react";
import './Herosuggest.css';
import '../../components/UI/Button/Button.css';
import BookDetailedCard from "../../components/BookCard/BookDetailedCard/BookDetailedCard";
import axios from "axios";
import "swiper/css";
import "swiper/css/scrollbar";
import { useProductsContext } from "../../Context/ProductContext/ProductContext";
import Carousel from 'react-bootstrap/Carousel';







const Herosuggest = () => {


   const [detail, setDetail] = useState([]);
   const { setBookId, BookId } = useProductsContext();



   useEffect(() => {
      const token = 'qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz';

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
         <Carousel className='slider-banner-hero slider_parent_section'>
            {detail.map((item, index) => {

               return (
                  <Carousel.Item interval={1200} key={item.id}>
                     <BookDetailedCard
                        author={item.author}
                        click={() => setBookId(item.id)}
                        Link={`/books/${item.id}`}

                        name={item.name}
                        edition={item.edition}
                        price={item.price}
                        publisher={item.publisher}
                        image={item.image}
                        alt={"book img"} />
                  </Carousel.Item>
               )


            })}
         </Carousel>
         {/* </Swiper> */}
      </section>
   )
}

export default Herosuggest;