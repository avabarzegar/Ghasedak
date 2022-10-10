import React from "react";
import './SliderTopLine.css';


// === the line on the slider ===
const BookSliderFirst = (props)=>{
    return(
      <div className={`slider-first-section ${props.containerBorder}`}>
        <span className={`header-slider-txt ${props.textBorder}`}>
            {props.text}
        </span>
        {props.children}
      </div>
    )
}

// === the line on the slider end ===

export default BookSliderFirst;