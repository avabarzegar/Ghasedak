import React from "react";
import Next from '../../assets/Images/icon/arrow-square-right.png';
import Prev from '../../assets/Images/icon/arrow-square-left.png';
import './SliderNavigation.css';

// === custom slider navigation  ===
const SliderNavigation =(props)=>{
    return(
        <div className='navigation-container'>
        <button onClick={props.handleLeftClick} className='swiper-control-prev' ref={props.navigationPrevRef} >
          <div className='swiper-control-next-icon'>
             <img src={Next} width='100%' height='100%' alt='next' />
          </div>
        </button>
        <button onClick={props.handleRightClick} className='swiper-control-next' ref={props.navigationNextRef} >
          <div className='swiper-control-prev-icon'>
             <img src={Prev} width='100%' height='100%' alt='prev' />
          </div>
        </button>
      </div>
    )
}

// === custom slider navigation end  ===

export default SliderNavigation;