import React from "react";
import { Container } from "react-bootstrap";
import BestShopsSlides from './bestshopsSlides/BestshopsSlides';
import './Bestshops.css'
// === first book slider layout ===
const BestShops = ()=>{
    return(
        <Container className='book-slider-layout'>
            <BestShopsSlides />
        </Container>
    )
}

// === first book slider layout end ===

export default BestShops;