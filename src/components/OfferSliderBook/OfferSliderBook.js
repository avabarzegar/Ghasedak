import { React, useState, useEffect } from 'react';
import axios from 'axios';
import "./OfferSliderBook.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Offer from '../offer/Offer';
import BannerSlider from '../BannerSlider/BannerSlider';

const OfferSliderBook = () => {

  const [banner, setBanner] = useState([]);


  useEffect(() => {
    const token = '23WkcBwlNrIWRoIVii9wAJqlnGg6wnSu7jLatyJw';

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      key: "value"
    };


    //    === get slides data from api ===
    axios.post(
      '/user/pwa/home',
      bodyParameters,
      config
    ).then((response) => {
      console.log(response.data.banners.data[0].items.data)
      const bannerData = [];
      response.data.banners.data[0].items.data.map((item) => {
        bannerData.push({
          id: item.id,
          title: item.title,
          images: item.image_url,
        })

      })

      setBanner(bannerData)
    })
      .catch((err) => {
        console.log(err.message)
      })



    //    === get slides data from api ===

  }, [])
  return (
    <Container className="offer-container container_section_heroslider">
      <Carousel className='slider_parent_section slider-parent-section-offer-book'>
        {banner.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <BannerSlider image={item.images} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  );
}

export default OfferSliderBook;
