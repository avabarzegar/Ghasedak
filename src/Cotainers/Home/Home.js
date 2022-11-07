import React, { useEffect, useState } from "react";
// Home page section components
import Header from "../../components/Header/Header";
import BookSliderFirst from "../../components/BookSliderFirst/BookSliderFirst";
import MostSaleSlider from "../../components/MostSaleSlider/MostSaleSlider";
import axios from "axios";
import "./Home.css";
// Home page section components end
import { Container } from "react-bootstrap";
// import NearestShops from '../../components/nearestshops/nearestshops';
import BestShops from "../../components/bestshops/Bestshops";
import OfferSliderBook from "../../components/OfferSliderBook/OfferSliderBook";
import PopularBooksSlider from "../../components/PopularBooksSlider/PopularBooksSlider";
import ThirdPublisherSlider from "../../components/ThirdPublisherSlider/ThirdPublisherSlider";
import SamiPublisherSlider from "../../components/SamiPublisherSlider/SamiPublisherSlider";
import MostSaleMonthSlider from "../../components/MostSaleMonthSlider/MostSaleMonthSlider";
import MostSaleYearSlider from "../../components/MostSaleYearSlider/MostSaleYearSlider";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/UI/Loader/Loader";
// context
import HomeContextProvider from "../../Context/HomeContext/HomeContext";
// context -end

// Home page section components -end

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    // the first type of slider used in home page
    <HomeContextProvider>
      <Layout>
        <Header />
        <BookSliderFirst />
        <MostSaleSlider />
        <MostSaleMonthSlider />
        <MostSaleYearSlider />
        <OfferSliderBook />
        <PopularBooksSlider />
        <BestShops />
        <ThirdPublisherSlider />
        <SamiPublisherSlider />
      </Layout>
    </HomeContextProvider>
    //  the first type of slider used in home page end
  );
};

export default Home;
