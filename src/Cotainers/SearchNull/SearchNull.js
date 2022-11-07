import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
// search null section components
import Layout from "../../components/Layout/Layout";
import SearchSidebar from "../../components/SearchPage/SearchSidebar/SearchSidebar";
import SearchNullContent from "../../components/SearchNullContent/SearchNullContent";
// search null section components end
import "./SearchNull.css";


const SearchNull = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout navbarColor="navbar-purple">
      <Container fluid className="search-container">
        <Container>
          <Row>
            <Col xl={3} lg={4} md={5}>
              <SearchSidebar />
            </Col>
            <Col className="not-found" xl={9} lg={8} md={7}>
              <SearchNullContent />
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export default SearchNull;
