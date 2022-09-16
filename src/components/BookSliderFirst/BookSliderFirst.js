import React from "react";
import BookSliderLayout from '../BookSliderLayout/BookSliderLayout';
import './BookSliderFirst.css';
import BookSlidesFirst from "./BookSlidesFirst/BookSlidesFirst";

// === first book slider layout ===
const BookSliderFirst = ()=>{
    return(
        <BookSliderLayout>
            <BookSlidesFirst />
        </BookSliderLayout>
    )
}

// === first book slider layout end ===

export default BookSliderFirst;