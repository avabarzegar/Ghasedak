import React from "react";
import { Container } from "react-bootstrap";
import './BookSliderLayout.css';


// === first book slider layout ===
const BookSliderLayout = (props)=>{
    return(
        <Container className='book-slider-layout'>
            {props.children}
        </Container>
    )
}

// === first book slider layout end ===

export default BookSliderLayout;