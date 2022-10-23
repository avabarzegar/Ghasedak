import React, { useState, useEffect } from "react";
import './InfoBooks.css';
import axios from "axios";


const InfoBooks = () => {

   const [banner, setBanner] = useState([]);

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
         '/user/pwa/home',
         bodyParameters,
         config
      ).then((response) => {
         console.log(response.data.banners.data[0].items.data)
         const bannerData = [];
         response.data.banners.data[0].items.data.map((item) => {
            bannerData.push({
               id: item.id,
               title: item.title,
               image: item.image_url,
            })

         })

         setBanner(bannerData)
      })
         .catch((err) => {
            console.log(err.message)
         })



      //    === get slides data from api ===

   }, [])
   return (
      <div>
         {banner.map((item) => {
            return (
               <div key={item.id}>
                  <img image={item.image} alt="banner image" />
               </div>
            )
         })}
      </div>
   )
}

export default InfoBooks;