import React from "react";
import { Container } from "react-bootstrap";
import BestshopsSlides from "./bestshopsSlides/BestshopsSlides";
import './Bestshops.css'
// === first book slider layout ===
const Bestshops = ()=>{
    return(
        <Container className='book-slider-layout'>
            <BestshopsSlides />
        </Container>
    )
}

// === first book slider layout end ===

export default Bestshops;