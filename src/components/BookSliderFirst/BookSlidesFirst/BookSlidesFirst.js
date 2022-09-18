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
  // state hook end

  useEffect(()=>{
    const token ='iLDhAayZTRWLPLpWvYDK1yhAVfHl46GAfzxKb8aO';
   
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
  const bodyParameters = {
     key: "value"
  };
  
   
    //    === get slides data from api ===
    axios.post( 
      '/books/list/all',
      bodyParameters,
      config
    ).then((response)=>{
           
            const slideData=[];
            response.data.data.map((item)=>{
              slideData.push({
                  id:item.id.id ,
                  name:item.name,
                  author: item.author,
                  publisher:item.publisher,
                  image:item.images.data.image_url,

                })  
                 
            })
           setSlide(slideData)
           console.log(slideData)
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
       <section className='special-discount'>
        {/* first section of slider  */}
        <SliderTopLine 
         text='تخفیف های ویژه'
         textBorder='off-bottom'
         containerBorder='off-bottom'
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
          slidesPerGroup={1}
          slidesPerView={'auto'}
          modules={[Navigation , Autoplay]}
          onSwiper={setSwiperRef}
          autoplay={{delay: 2000}}
          spaceBetween={20}
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
        >
        

          {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className='book-slide' key={item.id}>
                  {()=>{
                    if(item == 0){
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
        {/* // slider end */}
    </section>
    )
}


export default BookSlidesFirst;