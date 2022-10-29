import { useEffect, React, useState } from "react";
import "../Heroslider/Heroslider.css";
import Sliderpic from '../../assets/Images/Rectangle 2.png'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import axios from "axios";
import BannerSlider from "../BannerSlider/BannerSlider";


const Hreoslider = (props) => {

   const [banner, setBanner] = useState([]);

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
      <Container className="container_section_heroslider">
         {banner === [] || banner.length === 0 ? null : (
         <Carousel className='slider-banner-hero slider_parent_section'>
            {banner.map((item) => {
               return (
                  <Carousel.Item interval={1200} key={item.id}>
                     <BannerSlider image={item.image} />
                     {/* <img src={item.image} /> */}
                  </Carousel.Item>
               )
            })}
         </Carousel>
         )}
      </Container>
   );
}

export default Hreoslider;
