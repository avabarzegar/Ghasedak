import React from "react";
import { Container } from "react-bootstrap";
import './nearestshops.css';
import Nearestshopsslides from "./nearestshopsslides";

// === first book slider layout ===
const Nearestshops = ()=>{
    return(
        <Container className='book-slider-layout'>
            <Nearestshopsslides />
        </Container>
    )
}

// === first book slider layout end ===

export default Nearestshops;