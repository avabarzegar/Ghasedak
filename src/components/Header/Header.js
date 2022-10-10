import React from "react";
import { Container, Col , Row } from 'react-bootstrap';
import Herosuggest from "../../components/HeroSuggest/Herosuggest";
import Hreoslider from "../Heroslider/Hreoslider";
import './Header.css'

const Header = () => {
   return (
      <Container className="header">
         <Row>
            <Col className="heroslider_grid" xl={8}>
               <Hreoslider />
            </Col>
            <Col className="herosuggest_book" xl={4}>
              <Herosuggest />
            </Col>
         </Row>
      </Container>
   )
}

export default Header;