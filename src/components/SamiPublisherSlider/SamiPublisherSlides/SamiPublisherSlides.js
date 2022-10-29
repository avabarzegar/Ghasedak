// Import Swiper React components
import {  SwiperSlide ,Swiper } from 'swiper/react';
import SwiperCore,{  Navigation , Autoplay } from 'swiper';
import { React , useState ,useEffect , useRef , useCallback}  from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import SliderTopLine from '../../SliderTopLine/SliderTopLine';
import SliderNavigation from '../../SliderNavigation/SliderNavigation';
import BookSimpleCard from '../../BookCard/BookSimpleCard/BookSimpleCard';
import SeeAllShops from '../../seeallshops/Seeallshops';
import LinkedCard from '../../LinkedCard/LinkedCard';
import './SamiPublisherSlides.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SliderLayout from '../../SliderLayout/SliderLayout';

import { useProductsContext } from "../../../Context/ProductContext/ProductContext";



// === mapping swiper slides ===
const PopularBooksSlides =(props)=>{
    
  // refer hook
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  // refer hook end
  
  // state hook 
  const [swiperRef, setSwiperRef] = useState();
  const [slide , setSlide] =useState([]);
  const { setBookName, bookName } = useProductsContext();
  const [title, setTitle] = useState("");

  // state hook end


  useEffect(()=>{
    const token ='DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek';
   
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
  const bodyParameters = {
     key: "value"
  };
  
   
    //    === get slides data from api ===
    axios.post( 
      '/user/pwa/home',
      bodyParameters,
      config
    ).then((response)=>{
            const slideData=[];
            response.data.book_lists[5].books.data.map((item)=>{
              slideData.push({
                  id:item.id ,
                  name:item.name,
                  image:item.images.data[0].image_url,
                  price:item.best_price,
                });
                 
            });

            setTitle(response.data.book_lists[5].title);

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

      <section className='popular-books-first popular-books'>
        {/* first section of slider  */}

        <SliderTopLine 
         text={title}
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
          className='type-two-book-slider'
          modules={[Navigation , Autoplay ]}
          onSwiper={setSwiperRef}
          autoplay={{delay: 2000}}
          
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
            el: '.swiper-scrollbar',
            draggable: true,
          }}

          breakpoints= {{
           
           

            0:{
              slidesPerView: 1 ,
              spaceBetween: 0
            },
            576: {
              slidesPerView: 1.5 ,
              spaceBetween: 25
            },

            
            768: {
              slidesPerView: 1.5 ,  
              spaceBetween: 25
            },

           
            992:{
              slidesPerView: 3 ,
            },

            
            1200 :{
              slidesPerView: 3.5 ,
            },

            
            1400 : {
              slidesPerView: 4 ,
            }
          }}
        >
        

        {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide className="book-slide-two" key={item.id}>
                  <LinkedCard
                    click={() => setBookName(item.id)}
                    Link={`/products/${item.id}`}
                    name={item.name}
                    img={item.image}
                    price={item.price}
                  />
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