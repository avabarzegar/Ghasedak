// Import Swiper React components
import {  SwiperSlide ,Swiper } from 'swiper/react';
import SwiperCore,{  Navigation , Autoplay } from 'swiper';
import { React ,useState ,useEffect , useRef ,useCallback}  from 'react';
import axios from 'axios';
import SliderTopLine from '../../SliderTopLine/SliderTopLine';
import SliderNavigation from '../../SliderNavigation/SliderNavigation';
import BookSimpleCard from '../../BookCard/BookSimpleCard/BookSimpleCard';
import BookDetailedCard from '../../BookCard/BookDetailedCard/BookDetailedCard';
import './BookSlidesFirst.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';




// === mapping swiper slides ===
const BookSlidesFirst =()=>{
    
  // refer hook
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // refer hook end
  
  // state hook 
  const [swiperRef, setSwiperRef] = useState();
    const [slide , setSlide] =useState([]);
    const [swiperChange , setSwiperChange] =useState();
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
    
    // == use swiper autoplay ==
    SwiperCore.use([Autoplay])
    // == use swiper autoplay end ==
    SwiperCore.use([Navigation])
   
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
       <>
        {/* first section of slider  */}
        <SliderTopLine 
         text='تخفیف های ویژه'
         textBorder='orange-bottom'
         containerBorder='purple-border'
         >
         <div className='first-slider-left-container'>
            <div className='first-slider-label'>
              <span>پایان مهلت تا : 1 روز 22 ساعت 16 ثانیه</span>
            </div>
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



        {/* // slider  */}
        <Swiper
          className='book-swiper'
          onSlideChange={setSwiperChange}
          onSwiper={setSwiperRef}
          modules={[Autoplay , Navigation]}

          autoplay={{delay: 2000}}
          spaceBetween={20}
          slidesPerView ={4}
          initialSlide={0}
          loop={false}
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
          breakpoints= {{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            //  when window width is >= 480px
            480: {
              slidesPerView: '1.5',
            },
            // when window width is >= 640px
            640: {
              slidesPerView: '1.5',
            },
            992: {
              slidesPerView: '3',
              spaceBetween: 20
            }
          }}
        >
        

          {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className='book-slide' key={item.id}>
                  {()=>{
                    if(item.id==0){
                      return <BookDetailedCard />
                    }
                    else{
                      return <BookSimpleCard />
                    }
                  }

                  }
                    {/* {({ isActive }) => {
                        if(isActive){
                            return <ActiveSlide />
                        }
                        if(!isActive){
                            return <NonActiveSlide />
                        }
                      }
                    } */}
                </SwiperSlide>
                // == return swiper slides end ==
            )           
          })}
        </Swiper>  
        {/* // slider end */}
    </>
    )
}


export default BookSlidesFirst;