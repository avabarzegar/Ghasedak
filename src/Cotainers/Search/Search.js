import React from "react";
import { Container ,Col , Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import SearchAFilter from "../../Context/FilterContext/FilterContext";
import "./Search.css";
// search page components of sections 
import SearchBreadcrumb from "../../components/SearchPage/SearchBreadcrumb/SearchBreadcrumb";
import AppliedFilters from "../../components/SearchPage/AppliedFilters/AppliedFilters";
import SearchFilters from "../../components/SearchPage/SearchFilters/SearchFilters";
import SearchTabs from "../../components/SearchPage/SearchTabs/SearchTabs";
// search page components of sections end

// definig search page sections 
const Search =()=>{
  
    return(
        <SearchAFilter>
          <Layout navbarColor="navbar-purple">
            <Container fluid className="search-container">
                <Container>
                    <Row>
                      <Col xl={3} lg={4} md={5} >
                        <SearchBreadcrumb />
                        <AppliedFilters />
                        <SearchFilters />
                      </Col>
                      <Col xl={9} lg={8} md={7}>
                        <SearchTabs />
                      </Col>
                    </Row>
                </Container>
            </Container>
          </Layout>
        </SearchAFilter>
    )
}
// definig search page sections end


export default Search;