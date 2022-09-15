import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import MostSaleSlides from "./MostSlaleSlides/MostSaleSlides";
import './MostSaleSlider.css';

// === most sale slider layout ===
const MostSaleSlider = ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <MostSaleSlides />
        </BookSliderLayout>
    )
}

// === first book slider layout end ===

export default MostSaleSlider;