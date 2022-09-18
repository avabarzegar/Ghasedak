// Import Swiper React components
import {  SwiperSlide ,Swiper } from 'swiper/react';
import SwiperCore,{ Navigation , Autoplay } from 'swiper';
import { React ,useState ,useEffect , useRef ,useCallback}  from 'react';
import axios from 'axios';
import SliderTopLine from '../../SliderTopLine/SliderTopLine';
import SliderNavigation from '../../SliderNavigation/SliderNavigation';
import BestShopsSingleSlide from '../BestShopsSingleSlide/BestShopsSingleSlide';
import SeeAllShops from '../../SeeAllShops/SeeAllShops';
import { Col } from 'react-bootstrap';
import SliderLayout from '../../SliderLayout/SliderLayout';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './BestShopsSlides.css';

// === mapping swiper slides ===
const BestShopsSlides =()=>{
    
  // refer hook
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // refer hook end
  
  // state hook 
  const [swiperRef, setSwiperRef] = useState();
  const [slide , setSlide] =useState([]);
  // state hook end

    useEffect(()=>{
       
    //    === get slides data from api ===
        axios.post(' ')
        .then((response)=>{
            const slideData=[];
            for(const item in response.data.splice(0,12)){
                slideData.push({
                    id:item ,
                    title:response.data[item].title,
                    body:response.data[item].body
                })     
            }
           setSlide(slideData)
        })
        .catch((err)=>{
            console.log(err.message)
        })

      
     
    //    === get slides data from api ===

    } , [])
    
    // == use swiper autoplay & navigation ==
    SwiperCore.use([Navigation , Autoplay])
    // == use swiper autoplay end ==
   
   
    const handleLeftClick = useCallback(() => {
      if (!swiperRef) return;
      swiperRef.slidePrev();
    }, [swiperRef]);
 
    const handleRightClick = useCallback(() => {
      if (!swiperRef) return;
      swiperRef.slideNext();
    }, [swiperRef]);
 


    return(
       <section>
        {/* first section of slider  */}
        <SliderTopLine 
         text='فروشگاه های برتر'
         textBorder='purple-bottom'
         containerBorder='gray-bottom'
         >
         <div className='first-slider-left-container'>
            
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
        <Col xl={11} xs={10} className='type-two-book-slider-container'>
        <Swiper
          className='nearshop-swiper'
          onSwiper={setSwiperRef}
          modules={[Navigation , Autoplay]}
          dir={'rtl'}
          autoplay={{delay: 2000}}
          spaceBetween={20}
          slidesPerView ={'auto'}
          initialSlide={0}
          slidesPerGroup={1}
          loop={false}
          slideToClickedSlide={(0,false,false)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
          }}

        >
          
          {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className='nearshop-slide width-slides' key={item.id}>
                  <BestShopsSingleSlide />
                </SwiperSlide>
                // == return swiper slides end ==
            )           
          })}
          
        </Swiper> 
        </Col> 
       
          {/* // slider end */}
          <Col xl={1} xs={2} className='see-all-column'>
          {/* see all products  */}
           <SeeAllShops
           height='see-shop-height'
           title='مشـــــاهده  همـــــــــــــه  فروشگاه ها '
           />
          {/* see all products end */}
         </Col>
         </SliderLayout>
    </section>
    )
}
export default BestShopsSlides;