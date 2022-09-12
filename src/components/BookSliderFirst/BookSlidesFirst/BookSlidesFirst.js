// Import Swiper React components
import {  SwiperSlide ,Swiper } from 'swiper/react';
import SwiperCore,{Pagination, Autoplay } from 'swiper';
import { React ,useState ,useEffect}  from 'react';
import axios from 'axios';
import ActiveSlide from '../ActiveSlide/ActiveSlide';
import NonActiveSlide from '../NonActiveSlide/NonActiveSlide';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// === mapping swiper slides ===
const BookSlidesFirst =()=>{
    
    
    const [slide , setSlide] =useState([])

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
    // SwiperCore.use([Autoplay])
    // == use swiper autoplay end ==
    
    return(
        <Swiper
          modules={[ Pagination]}
          pagination={{clickable: true}}
          autoplay={{delay: 2000}}
          spaceBetween={16}
          cssMode= {false}
          initialSlide= {6}
          slidesPerView={4.2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {slide.map((item) => {
            return(
                // == return swiper slides ==

                <SwiperSlide  key={item.id}>
                    {({ isActive }) => {
                        if(isActive){
                            return <ActiveSlide />
                        }
                        if(!isActive){
                            return <NonActiveSlide />
                        }
                      }
                    }
                </SwiperSlide>
                // == return swiper slides end ==
            )           
        })}
        </Swiper>  
    )
}


export default BookSlidesFirst;