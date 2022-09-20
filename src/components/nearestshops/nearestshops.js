import React from "react";
import { Container } from "react-bootstrap";
import NearestshopsSlides from "./nearestshopsslides";

// === first book slider layout ===
const  nearestshops = ()=>{
    return(
        <Container className='book-slider-layout'>
            <NearestshopsSlides />
        </Container>
    )
}

// === first book slider layout end ===

export default  nearestshops;