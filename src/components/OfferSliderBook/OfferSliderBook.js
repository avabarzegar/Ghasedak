import "./OfferSliderBook.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Offer from '../offer/Offer';

const OfferSliderBook = () => {
   return (
      <Container className="offer-container container_section_heroslider">
         <Carousel className='slider_parent_section slider-parent-section-offer-book'>
            <Carousel.Item interval={1000}>
              <Offer />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <Offer />
            </Carousel.Item>
            <Carousel.Item>
              <Offer />
            </Carousel.Item>
            <Carousel.Item>
              <Offer />
            </Carousel.Item>
            <Carousel.Item>
              <Offer />
            </Carousel.Item>
            <Carousel.Item>
              <Offer />
            </Carousel.Item>
         </Carousel>
      </Container>
   );
}

export default OfferSliderBook;
