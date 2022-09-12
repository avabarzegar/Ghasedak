import "../Heroslider/Heroslider.css";
import Sliderpic from '../../assets/Images/Rectangle 2.png'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

const Hreoslider = () => {
   return (
      <Container className="container_section_heroslider">
         <Carousel className='slider_parent_section'>
            <Carousel.Item interval={1000}>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="First slide"
                  />
               </a>
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="Second slide"
                  />
               </a>
            </Carousel.Item>
            <Carousel.Item>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="Third slide"
                  />
               </a>
            </Carousel.Item>
            <Carousel.Item>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="Third slide"
                  />
               </a>
            </Carousel.Item>
            <Carousel.Item>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="Third slide"
                  />
               </a>
            </Carousel.Item>
            <Carousel.Item>
               <a href='#'>
                  <img
                     className="d-block w-100 image_slider"
                     src={Sliderpic}
                     alt="Third slide"
                  />
               </a>
            </Carousel.Item>
         </Carousel>
      </Container>
   );
}

export default Hreoslider;
