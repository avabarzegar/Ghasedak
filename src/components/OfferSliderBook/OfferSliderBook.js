import { React } from "react";
import "./OfferSliderBook.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import BannerSlider from "../BannerSlider/BannerSlider";
// context
import { useHomeContext } from "../../Context/HomeContext/HomeContext";
// context

const OfferSliderBook = () => {
  const { middleSlider } = useHomeContext();

  return (
    <>
      {middleSlider === [] || middleSlider.length === 0 ? null : (
        <Container className="offer-container container_section_heroslider">
          <Carousel className="slider_parent_section slider-parent-section-offer-book">
            {middleSlider.map((item) => {
              return (
                <Carousel.Item key={item.id}>
                  <BannerSlider image={item.image} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      )}
    </>
  );
};

export default OfferSliderBook;
