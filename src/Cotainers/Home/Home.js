import React from "react";
// Home page section components 
import Header from '../../components/Header/Header'
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import MostSaleSlider from '../../components/MostSaleSlider/MostSaleSlider';
// Home page section components end
import { Container } from "react-bootstrap";
import Nearestshops from '../../components/nearestshops/nearestshops'
import Bestshops from '../../components/bestshops/Bestshops'
import Offer from "../../components/offer/Offer";
import PopularBooksSlider from "../../components/PopularBooksSlider/PopularBooksSlider";
import ThirdPublisherSlider from "../../components/ThirdPublisherSlider/ThirdPublisherSlider";
import SamiPublisherSlider from "../../components/SamiPublisherSlider/SamiPublisherSlider";
const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Container style={{paddingBottom : '4rem'}} >
        <Header />
        <BookSliderFirst />
        <MostSaleSlider />
        <Nearestshops />
        <Offer />
        <PopularBooksSlider />
        <Bestshops />
        <ThirdPublisherSlider />
        <SamiPublisherSlider />
    </Container>
    // === the first type of slider used in home page end ===

    )
}


export default Home;