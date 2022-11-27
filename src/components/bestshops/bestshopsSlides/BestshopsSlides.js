// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { React, useState, useRef, useCallback } from "react";
import SliderTopLine from "../../SliderTopLine/SliderTopLine";
import SliderNavigation from "../../SliderNavigation/SliderNavigation";
import BestShopssingleslide from "../../bestshops/BestShopsSingleSlide/BestShopsSingleSlide";
import SeeAllShops from "../../seeallshops/Seeallshops";
import { Col } from "react-bootstrap";
import SliderLayout from "../../SliderLayout/SliderLayout";
// context
import { useHomeContext } from "../../../Context/HomeContext/HomeContext";
// context

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./BestshopsSlides.css";

// === mapping swiper slides ===
const BestShopsSlides = () => {
  // refer hook
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // refer hook end

  // state hook
  const [swiperRef, setSwiperRef] = useState();
  const { storeSlider } = useHomeContext();
  // state hook end

  // == use swiper autoplay & navigation ==
  SwiperCore.use([Navigation, Autoplay]);
  // == use swiper autoplay end ==

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (
    <>
      {storeSlider === [] || storeSlider.length === 0 ? null : (
        <section>
          {/* first section of slider  */}
          <SliderTopLine
            text="فروشگاه های برتر"
            textBorder="purple-bottom"
            containerBorder="gray-bottom"
          >
            <div className="first-slider-left-container">
              {/* navigation  */}
              <SliderNavigation
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
              />
              {/* navigation end */}
            </div>
          </SliderTopLine>
          {/* first section of slider end  */}

          {/* slider container section  */}
          <SliderLayout>
            {/* // slider  */}
            <Col xl={11} xs={10} className="type-two-book-slider-container">
              <Swiper
                className="nearshop-swiper"
                onSwiper={setSwiperRef}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                initialSlide={0}
                slidesPerGroup={1}
                spaceBetween={12}
                loop={false}
                slideToClickedSlide={(0, false, false)}
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
                  320: {
                    slidesPerView: 1.2,
                  },
                  420: {
                    slidesPerView: 2.1,
                  },
                  576: {
                    slidesPerView: 2.5,
                  },

                  768: {
                    slidesPerView: 2.8,
                    spaceBetween: 10,
                  },

                  992: {
                    slidesPerView: 5,
                  },

                  1200: {
                    slidesPerView: 5.5,
                  },

                  1400: {
                    slidesPerView: 6,
                  },
                }}
              >
                {storeSlider.map((item) => {
                  return (
                    // == return swiper slides ==

                    <SwiperSlide
                      className="book-slide-two nearshop-slide width-slides"
                      key={item.id}
                    >
                      <BestShopssingleslide
                        acticeText={item.name}
                        activeImage={item.image ? item.image : null}
                      />
                    </SwiperSlide>
                    // == return swiper slides end ==
                  );
                })}
              </Swiper>
            </Col>

            {/* // slider end */}
            <Col xl={1} xs={2} className="see-all-column">
              {/* see all products  */}
              <SeeAllShops
                height="see-shop-height"
                title="مشـــــاهده  همـــــــــــــه  فروشگاه ها "
              />
              {/* see all products end */}
            </Col>
          </SliderLayout>
        </section>
      )}
    </>
  );
};
export default BestShopsSlides;
