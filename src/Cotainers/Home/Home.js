import React from "react";
import Header from '../../components/Header/Header'
import BookSlidesFirst from "../../components/BookSliderFirst/BookSlidesFirst/BookSlidesFirst";
import { Container } from "react-bootstrap";

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{marginTop:'13rem'}}>
        <Header />
        <BookSlidesFirst />
    </Container>
    // === the first type of slider used in home page end ===

    )
}


export default Home;