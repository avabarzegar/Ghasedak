import React from "react";
import { Container } from "react-bootstrap";
import BestShopsSlides from "./BestShopsSlides/BestShopsSlides";
import './BestShops.css'
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