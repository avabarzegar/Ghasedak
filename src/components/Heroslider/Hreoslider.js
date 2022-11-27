import { React } from "react";
import "../Heroslider/Heroslider.css";
import Sliderpic from "../../assets/Images/Rectangle 2.png";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import BannerSlider from "../BannerSlider/BannerSlider";
// context
import { useHomeContext } from "../../Context/HomeContext/HomeContext";
// context

const Hreoslider = () => {
  const { heroSlider } = useHomeContext();

  return (
    <Container className="container_section_heroslider">
      <Carousel className="slider-banner-hero slider_parent_section">
        {heroSlider === [] || heroSlider.length === 0
          ? null
          : heroSlider.map((item) => {
              return (
                <Carousel.Item interval={1200} key={item.id}>
                  <BannerSlider image={item.image} />
                </Carousel.Item>
              );
            })}
      </Carousel>
    </Container>
  );
};

export default Hreoslider;
