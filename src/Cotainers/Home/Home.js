import React from "react";
// Home page section components 
import Header from '../../components/Header/Header'
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import MostSaleSlider from '../../components/MostSaleSlider/MostSaleSlider';
// Home page section components end
import { Container } from "react-bootstrap";
// import NearestShops from '../../components/nearestshops/nearestshops';
import BestShops from '../../components/bestshops/Bestshops';
import OfferSliderBook from "../../components/OfferSliderBook/OfferSliderBook";
import PopularBooksSlider from "../../components/PopularBooksSlider/PopularBooksSlider";
import ThirdPublisherSlider from "../../components/ThirdPublisherSlider/ThirdPublisherSlider";
import SamiPublisherSlider from "../../components/SamiPublisherSlider/SamiPublisherSlider";
import MostSaleMonthSlider from "../../components/MostSaleMonthSlider/MostSaleMonthSlider";
import MostSaleYearSlider from "../../components/MostSaleYearSlider/MostSaleYearSlider";
import Layout from "../../components/Layout/Layout";
// Home page section components end

const Home =()=>{
    return(
    // === the first type of slider used in home page ===
    <Layout>
        <Header />
        <BookSliderFirst />
        <MostSaleSlider />
        <MostSaleMonthSlider />
        <MostSaleYearSlider />
        {/* <NearestShops /> */}
        <OfferSliderBook />
        <PopularBooksSlider />
        <BestShops />
        <ThirdPublisherSlider />
        <SamiPublisherSlider />
    </Layout>
    // === the first type of slider used in home page end ===

    )
}


export default Home;