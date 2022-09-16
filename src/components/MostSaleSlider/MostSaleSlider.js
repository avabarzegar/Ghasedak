import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import MostSaleSlides from "./MostSlaleSlides/MostSaleSlides";
import './MostSaleSlider.css';

// === most sale slider  ===
const MostSaleSlider = ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <MostSaleSlides />
        </BookSliderLayout>
    )
}

// === most sale slider end  ===


export default MostSaleSlider;