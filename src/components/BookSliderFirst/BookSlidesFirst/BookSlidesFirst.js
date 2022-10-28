// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { React, useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import SliderTopLine from "../../SliderTopLine/SliderTopLine";
import SliderNavigation from "../../SliderNavigation/SliderNavigation";
import BookSimpleCard from "../../BookCard/BookSimpleCard/BookSimpleCard";
import "./BookSlidesFirst.css";

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

  // state hook
  const [swiperRef, setSwiperRef] = useState();
  const [slide, setSlide] = useState([]);
  const [title, setTitle] = useState("");
  // state hook end

  useEffect(() => {
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };
    axios.post("/user/pwa/home", bodyParameters, config).then((response) => {
      let slideData = [];
      const responseData = response.data.daily_discounts.data;

      if (responseData === [] || responseData.length === 0) {
        slideData = [];
      } else {
        responseData.map((item) => {
          slideData.push({
            id: item.id,
            name: item.name,
            image: item.images.data[0].image_url,
          });
        });
        setTitle(response.data.daily_discount.title);
      }

      setSlide(slideData);

      //    === get slides data from api ===
    });

    //    === get slides data from api ===
  }, []);

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
      {slide === [] || slide.length === 0 ? null : (
        <div className="special-discount">
          <SliderTopLine
            text={title}
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
              576: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },

              768: {
                slidesPerView: 1.5,
                spaceBetween: 25,
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
            {slide.map((item) => {
              return (
                // == return swiper slides ==

                <SwiperSlide className="book-slide" key={item.id}>
                  <BookSimpleCard name={item.name} img={item.image} />
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
