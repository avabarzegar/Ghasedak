// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { React, useState, useRef, useCallback } from "react";
import Col from "react-bootstrap/Col";
import SliderTopLine from "../../SliderTopLine/SliderTopLine";
import SliderNavigation from "../../SliderNavigation/SliderNavigation";
import LinkedCard from "../../LinkedCard/LinkedCard";
import SeeAllShops from "../../seeallshops/Seeallshops";
import "./ThirdPublisherSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SliderLayout from "../../SliderLayout/SliderLayout";

// context
import { useProductsContext } from "../../../Context/ProductContext/ProductContext";
import { useHomeContext } from "../../../Context/HomeContext/HomeContext";
// context

// === mapping swiper slides ===
const ThirdPublisherSlider = (props) => {
  // refer hook
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // refer hook end

  // state hook
  const [swiperRef, setSwiperRef] = useState();
  const { setBookId } = useProductsContext();
  const { bookSliderSix, bookSixTitle } = useHomeContext();
  // state hook end

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
    <>
      {bookSliderSix === [] || bookSliderSix.length === 0 ? null : (
        <section>
          {/* first section of slider  */}

          <SliderTopLine
            text={bookSixTitle ? bookSixTitle : null}
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
                className="slider-last-one type-two-book-slider"
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
                  400: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  450: {
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
                {bookSliderSix.map((item) => {
                  return (
                    // == return swiper slides ==

                    <SwiperSlide className="book-slide-two" key={item.id}>
                      <LinkedCard
                        click={() => setBookId(item.id)}
                        Link={`/books/${item.id}`}
                        name={item.name}
                        img={item.image}
                        price={item.price}
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
                height="height-book-slider"
                title="مشـــــاهده  همـــــــــــــه  محصــولات "
              />
              {/* see all products end */}
            </Col>
          </SliderLayout>
          {/* slider container section end */}
        </section>
      )}
    </>
  );
};

export default ThirdPublisherSlider;
