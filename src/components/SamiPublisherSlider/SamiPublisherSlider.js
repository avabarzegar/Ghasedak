import React from "react";
import BookSliderLayout from "../BookSliderLayout/BookSliderLayout";
import SamiPublisherSlides from "./SamiPublisherSlides/SamiPublisherSlides";



// === sami publisher slider  ===
const SamiPublisherSlider= ()=>{
    return(
        <BookSliderLayout className='book-slider-layout'>
            <SamiPublisherSlides />
        </BookSliderLayout>
    )
}

// === sami publisher slider end ===


export default SamiPublisherSlider;