// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { React, useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import SliderTopLine from "../../SliderTopLine/SliderTopLine";
import SliderNavigation from "../../SliderNavigation/SliderNavigation";
import LinkedCard from "../../LinkedCard/LinkedCard";
import "./BookSlidesFirst.css";
// context
import { useProductsContext } from "../../../Context/ProductContext/ProductContext";
import { useHomeContext } from "../../../Context/HomeContext/HomeContext";
// context
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// === mapping swiper slides ===
const BookSlidesFirst = () => {
  // refer hook
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // refer hook end

  // states and variables
  const [swiperRef, setSwiperRef] = useState();
  const { setBookId } = useProductsContext();
  const { bookSliderOne, bookOneTitle } = useHomeContext();
  // states and variables end


  // == use swiper core autoplay / navigation ==
  SwiperCore.use([Autoplay, Navigation]);
  // == use swiper autoplay core autoplay / navigation end ==

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <section>
      {bookSliderOne === [] || bookSliderOne.length === 0 ? null : (
        <div className="special-discount">
          <SliderTopLine
            text={bookOneTitle ? bookOneTitle : null}
            textBorder="orange-bottom"
            containerBorder="off-bottom"
          >
            <div className="first-slider-left-container">
              <div className="first-slider-label">
                <span>پایان مهلت تا : 1 روز 22 ساعت 16 ثانیه</span>
              </div>

              <SliderNavigation
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
              />
            </div>
          </SliderTopLine>

          <Swiper
            className="book-swiper"
            modules={[Navigation, Autoplay]}
            onSwiper={setSwiperRef}
            autoplay={{ delay: 2000 }}
            slidesPerGroup={1}
            spaceBetween={12}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              draggable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400:{
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              450:{
                slidesPerView: 1.5,
              },
              576: {
                slidesPerView: 1.8,
              },

              768: {
                slidesPerView: 2.3,
                spaceBetween: 15,
              },

              992: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 3.5,
              },

              1400: {
                slidesPerView: 4,
              },
            }}
          >
            {bookSliderOne.map((item) => {
              return (
                // == return swiper slides ==

                <SwiperSlide className="book-slide" key={item.id}>
                  <LinkedCard
                    name={item.name}
                    img={item.image}
                    click={() => setBookId(item.id)}
                    Link={`/books/${item.id}`}
                  />
                </SwiperSlide>
                // == return swiper slides end ==
              );
            })}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default BookSlidesFirst;
