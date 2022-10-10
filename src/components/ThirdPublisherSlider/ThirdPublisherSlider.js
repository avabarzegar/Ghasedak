import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import ThirdPublisherSlides from './ThirdPublisherSlides/ThirdPublisherSlides';
import './ThirdPublisherSlider.css';

// === third publisher slider  ===
const ThirdPublisherSlider= ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <ThirdPublisherSlides />
        </BookSliderLayout>
    )
}

// === third publisher slider end  ===


export default ThirdPublisherSlider;