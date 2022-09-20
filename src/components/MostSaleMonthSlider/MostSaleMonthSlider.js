import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import MostSaleMonthSlides from "./MostSaleMonthSlides/MostSaleMonthSlides";


// === most sale slider  ===
const MostSaleMonthSlider = ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <MostSaleMonthSlides />
        </BookSliderLayout>
    )
}

// === most sale slider end  ===


export default MostSaleMonthSlider;