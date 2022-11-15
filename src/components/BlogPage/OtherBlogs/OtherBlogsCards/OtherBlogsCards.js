import { React, useCallback, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Img from "../../../../assets/Images/Asset 2@320x-8 1.png";
import OtherBlogsCard from "../OtherBlogsCard/OtherBlogsCard";
import Right from "../../../../assets/Images/icon/arrow-circle-right.svg";
import Left from "../../../../assets/Images/icon/arrow-circle-left.svg";
import "./OtherBlogsCards.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

// define other blogs cards slides
const OtherBlogsCards = () => {
  // refer hook
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // refer hook end

  // state hook
  const [swiperRef, setSwiperRef] = useState();
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      slidesPerView={3}
      onSwiper={setSwiperRef}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      slidesPerGroup={2}
      spaceBetween={20}
      pagination={pagination}
      modules={[Grid, Pagination, Navigation]}
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
              {[...Array(12)].map((item, index) => {
                return (
                  <Col xl={4} md={6}>
                    <OtherBlogsCard
                      img={Img}
                      title={`روز جهانی کتاب همراه با قاصدک ${index}`}
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
      <div className="blog-navigate-container">
        <button onClick={handleRightClick} ref={navigationNextRef}>
          <div className="blog-navigation">
            <img src={Right} width="100%" height="100%" alt="prev button" />
          </div>
        </button>
        <button onClick={handleLeftClick} ref={navigationPrevRef}>
          <div className="blog-navigation">
            <img src={Left} width="100%" height="100%" alt="next button" />
          </div>
        </button>
      </div>
    </Swiper>
  );
};
// define other blogs cards slides -end

export default OtherBlogsCards;
