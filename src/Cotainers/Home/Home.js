import React from "react";
// Home page section components 
import Header from '../../components/Header/Header'
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import MostSaleSlider from '../../components/MostSaleSlider/MostSaleSlider';
// Home page section components end
import { Container } from "react-bootstrap";

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{marginTop:'13rem'}}>
        <Header />
        <BookSliderFirst />
        <MostSaleSlider />
    </Container>
    // === the first type of slider used in home page end ===

    )
}


export default Home;