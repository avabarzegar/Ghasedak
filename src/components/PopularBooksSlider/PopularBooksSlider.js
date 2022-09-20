import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import PopularBooksSlides from "./PopularBooksSlides/PopularBooksSlides";


// === most sale slider layout ===
const PopularBooksSlider = ()=>{
    return(
        <BookSliderLayout className='popular-books book-slider-layout'>
            <PopularBooksSlides />
        </BookSliderLayout>
    )
}

// === first book slider layout end ===

export default PopularBooksSlider;