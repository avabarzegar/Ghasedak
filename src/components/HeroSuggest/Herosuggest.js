import React, { useState, useEffect } from "react";
import './Herosuggest.css';
import '../../components/UI/Button/Button.css';
import BookDetailedCard from "../../components/BookCard/BookDetailedCard/BookDetailedCard";
import axios from "axios";
const Herosuggest = () => {
   const [detail, setDetail] = useState([]);
   useEffect(() => {
      const token = '23WkcBwlNrIWRoIVii9wAJqlnGg6wnSu7jLatyJw';

      const config = {
         headers: { Authorization: `Bearer ${token}` }
      };

      const bodyParameters = {
         key: "value"
      };


      //    === get slides data from api ===
      axios.post(
         '/application/home',
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
               image : item.images.data[0].image_url,
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
         {detail.map((item, index) => {
            if (index === 1) {
               return (
                  <BookDetailedCard author={item.author} name={item.name} publisher={item.publisher} image={item.image} key={item.id} alt={"book img"} />
               )
            }

         })}

      </section>
   )
}

export default Herosuggest;