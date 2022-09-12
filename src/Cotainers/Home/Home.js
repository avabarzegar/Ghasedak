import React from "react";
import BookSlidesFirst from "../../components/BookSliderFirst/BookSlidesFirst/BookSlidesFirst";
import { Container } from "react-bootstrap";

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{marginTop:'20rem'}}>
        <BookSlidesFirst />
    </Container>
    // === the first type of slider used in home page end ===

    )
}

export default Home;