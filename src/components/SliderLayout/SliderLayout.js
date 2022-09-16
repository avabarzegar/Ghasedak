import React from "react";
import { Row } from "react-bootstrap";
import './SliderLayout.css';

// === define the layout of slider ===
const SliderLayout =(props)=>{
    return(
        <Row className='slider-container'>
            {props.children}
        </Row>
    )
}

// === define the layout of slider ===

export default SliderLayout;