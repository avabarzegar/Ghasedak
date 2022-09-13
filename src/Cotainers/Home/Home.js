import React from "react";
import Header from '../../components/Header/Header'
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import { Container } from "react-bootstrap";

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{marginTop:'13rem'}}>
        <Header />
        <BookSliderFirst />
    </Container>
    // === the first type of slider used in home page end ===

    )
}


export default Home;