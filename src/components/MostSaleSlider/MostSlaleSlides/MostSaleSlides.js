// Import Swiper React components
import {  SwiperSlide ,Swiper } from 'swiper/react';
import SwiperCore,{  Navigation , Autoplay } from 'swiper';
import { React , useState ,useEffect , useRef , useCallback}  from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import SliderTopLine from '../../SliderTopLine/SliderTopLine';
import SliderNavigation from '../../SliderNavigation/SliderNavigation';
import BookSimpleCard from '../../BookCard/BookSimpleCard/BookSimpleCard';
import BookDetailedCard from '../../BookCard/BookDetailedCard/BookDetailedCard';
import SeeAllShops from '../../seeallshops/Seeallshops';
import './MostSaleSlides.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SliderLayout from '../../SliderLayout/SliderLayout';




// === mapping swiper slides ===
const MostSaleSlides =()=>{
    
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
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
    
    // == use swiper core autoplay / navigation ==
    SwiperCore.use([Autoplay , Navigation])
    // == use swiper autoplay core autoplay / navigation end ==
    
   
    const handleLeftClick = useCallback(() => {
      if (!swiperRef) return;
      swiperRef.slidePrev();
    }, [swiperRef]);
 
    const handleRightClick = useCallback(() => {
      if (!swiperRef) return;
      swiperRef.slideNext();
    }, [swiperRef]);
 
  //  let SwiperSlide;

    return(

      <section>
        {/* first section of slider  */}

        <SliderTopLine 
         text='پرفروش ترین ها'
         textBorder='off-bottom'
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
          <Col xl={11} lg={10} className='most-sale-swiper-container'>
        <Swiper
          className='most-sale-swiper'
          slidesPerGroup={1}
          slidesPerView={'auto'}
          dir={'rtl'}
          modules={[Navigation , Autoplay]}
          onSwiper={setSwiperRef}
          autoplay={{delay: 2000}}
          spaceBetween={40}
          initialSlide={0}
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
          // breakpoints= {{
           
          //   320: {
          //     slidesPerView: 1,
          //   },
          
          //   480: {
          //     slidesPerView: '1.5',
          //   },
           
          //   640: {
          //     slidesPerView: '1.5',
          //   },
          //   992: {
          //     slidesPerView: 3,
          //     spaceBetween: 20
          //   }
          // }}
        >
        

          {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className='book-slide' key={item.id}>
                  {()=>{
                    if(item.id == 0){
                      return <BookDetailedCard />
                    }
                    else{
                      return <BookSimpleCard />
                    }
                  }

                  }
                </SwiperSlide>
                // == return swiper slides end ==
            )           
          })}
        </Swiper>  
          </Col>
        {/* // slider end */}

         <Col xl={1} lg={2} className='see-all-column'>
         {/* see all products  */}
           <SeeAllShops
           title='مشاهده همه محصولات'
           />
          {/* see all products end */}
         </Col>


        </SliderLayout>
        {/* slider container section end */}

      </section>
    )
}


export default MostSaleSlides;