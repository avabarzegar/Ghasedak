import React from "react";
import Header from '../../components/Header/Header'
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import { Container } from "react-bootstrap";
import Nearestshops from '../../components/nearestshops/nearestshops'

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{paddingBottom : '4rem'}} >
        <Header />
        <BookSliderFirst />
        <Nearestshops />
    </Container>
    // === the first type of slider used in home page end ===

    )
}


export default Home;