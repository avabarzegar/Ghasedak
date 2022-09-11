// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css/bundle";

// import "../Heroslider/Heroslider.css";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// // import required modules
// import { Pagination, Navigation } from "swiper";
// import { Container } from "react-bootstrap";

// export default function Heroslider() {
//   return (
//     <Container>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><div></div></SwiperSlide>
//         <SwiperSlide><div></div></SwiperSlide>
//         <SwiperSlide><div></div></SwiperSlide>
//         <SwiperSlide><div></div></SwiperSlide>
//         <SwiperSlide><div></div></SwiperSlide>
//         <SwiperSlide><div></div></SwiperSlide>      
//       </Swiper>
//     </Container>
//   );
// }
import "../Heroslider/Heroslider.css";

import Sliderpic from '../../assets/Images/Rectangle 2.png'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const  Hreoslider = () => {
   return (
      <Container>
         <Carousel className='slider_parent_section'>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="First slide"
               />
              
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="Second slide"
               />
              
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="Third slide"
               />
               
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="Third slide"
               />
              
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="Third slide"
               />
               
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 image_slider"
                  src={Sliderpic}
                  alt="Third slide"
               />
               
            </Carousel.Item>
         </Carousel>
      </Container>
   );
}

export default Hreoslider;
