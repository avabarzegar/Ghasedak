import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import MostSaleYearSlides from "./MostSaleYearSlides/MostSaleYearSlides";


// === most sale slider  ===
const MostSaleYearSlider = ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <MostSaleYearSlides />
        </BookSliderLayout>
    )
}

// === most sale slider end  ===


export default MostSaleYearSlider;