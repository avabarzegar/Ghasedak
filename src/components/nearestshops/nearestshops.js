import React from "react";
import { Container } from "react-bootstrap";
import './NearestShops.css';
import NearestShopsSlides from "./NearestShopsSlides";

// === first book slider layout ===
const  NearestShops = ()=>{
    return(
        <Container className='book-slider-layout'>
            <NearestShopsSlides />
        </Container>
    )
}

// === first book slider layout end ===

export default  NearestShops;