import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import ThirdPublisherSlides from './ThirdPublisherSlides/ThirdPublisherSlides';
import './ThirdPublisherSlider.css';

// === most sale slider layout ===
const ThirdPublisherSlider= ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <ThirdPublisherSlides />
        </BookSliderLayout>
    )
}

// === first book slider layout end ===

export default ThirdPublisherSlider;