import React from "react";
import { Row, Col } from "react-bootstrap";
import Img from "../../../../assets/Images/Asset 2@320x-8 1.png";
import OtherBlogsCard from "../OtherBlogsCard/OtherBlogsCard";
import "./OtherBlogsCards.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";

// define other blogs cards slides
const OtherBlogsCards = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      slidesPerView={3}
      //   slidesPerColumn={2}
      slidesPerGroup={2}
      spaceBetween={20}
    //   slidesPerColumnFill="row"
      pagination={pagination}
      modules={[Grid, Pagination]}
      className="other-blogs-slider"
      scrollbar={{
        el: ".swiper-scrollbar",
        draggable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // 576: {
        //   slidesPerView: 1.5,
        //   spaceBetween: 25,
        // },

        // 768: {
        //   slidesPerView: 1.5,
        //   spaceBetween: 25,
        // },

        992: {
          slidesPerView: 2,
        },

        1200: { 
            slidesPerView: 3,
        },

      }}
    >
      {[...Array(13)].map((item) => {
        return (
          <SwiperSlide>
            <Row className="blog-slide-row">
              {[...Array(12)].map((item,index) => {
                return (
                  <Col xl={4} md={6}>
                    <OtherBlogsCard
                      img={Img}
                      title={`روز جهانی کتاب هراه با قاصدک ${index}`}
                      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی ..."
                      message="21"
                      view="334"
                      author="ساغر خوش نویس"
                      date="1401/05/22"
                    />
                  </Col>
                );
              })}
            </Row>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
// define other blogs cards slides -end

export default OtherBlogsCards;
