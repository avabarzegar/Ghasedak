import React from "react";
import { Container } from "react-bootstrap";
import './BookSliderFirst.css';
import BookSlidesFirst from "./BookSlidesFirst/BookSlidesFirst";

// === first book slider layout ===
const BookSliderFirst = ()=>{
    return(
        <Container className='book-slider-layout'>
            <BookSlidesFirst />
        </Container>
    )
}

// === first book slider layout end ===

export default BookSliderFirst;