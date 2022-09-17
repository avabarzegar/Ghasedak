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
import './PopularBooksSlides.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SliderLayout from '../../SliderLayout/SliderLayout';




// === mapping swiper slides ===
const PopularBooksSlides =()=>{
    
  // refer hook
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  // refer hook end
  
  // state hook 
  const [swiperRef, setSwiperRef] = useState();
  const [slide , setSlide] =useState([]);
  // state hook end


  useEffect(()=>{
    // axios.get('http://localhost:5000/api/xxx', //proxy uri
    // {
    //    headers: {
    //       authorization: ' xxxxxxxxxx' ,
    //       'Content-Type': 'application/json'
    //    } 
    // }).then(function (response) {
    //    console.log(response);
    // });
    // const config = {
      
    // };
    //    === get slides data from api ===
        axios.post('/books/show', 
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization :'Bearer token',
            "Access-Control-Allow-Methods": "GET,PUT",
          }
        }
        )
        .then((response)=>{
            const slideData=[];
            console.log(response.data)
            response.data.map((item)=>{
              slideData.push({
                  id:item.id ,
                  name:item.name,
                  author: item.author,
                  publisher:item.publisher,
                  image:item.images.data.image_url,

                })  
                console.log(item)  
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

      <section className='popular-books'>
        {/* first section of slider  */}

        <SliderTopLine 
         text='محبوب ترین کتاب ها'
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
          <Col xl={11} xs={10} className='type-two-book-slider-container'>
        <Swiper
          className='type-two-book-slider'
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
        >
        

          {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className='book-slide' key={item.id}>
                  {()=>{
                    if(item.id == 1){
                      return <BookDetailedCard
                      name={item.name}
                      author={item.author}
                      publisher={item.publisher}
                      img={item.image}
                      />
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

         <Col xl={1} xs={2} className='see-all-column'>
         {/* see all products  */}
           <SeeAllShops
           height='height-book-slider'
           title='مشـــــاهده  همـــــــــــــه  محصــولات '
           />
          {/* see all products end */}
         </Col>


        </SliderLayout>
        {/* slider container section end */}

      </section>
    )
}


export default PopularBooksSlides;