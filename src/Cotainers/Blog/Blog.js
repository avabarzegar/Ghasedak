import React from "react";
import { Container , Col , Row } from "react-bootstrap";
// blog section components 
import Layout from "../../components/Layout/Layout";
import BlogSide from "../../components/BlogPage/BlogSide/BlogSide";
// blog section components 
import SearchTabs from "../../components/SearchPage/SearchTabs/SearchTabs";


const Blog =()=>{
    return(
        <Layout navbarColor="navbar-purple">
            <Container fluid className="search-container">
                <Container>
                    <Row>
                      <Col xl={3} lg={4} md={5} >
                        <BlogSide />
                      </Col>
                      <Col xl={9} lg={8} md={7}>
                        <SearchTabs />
                      </Col>
                    </Row>
                </Container>
            </Container>
        </Layout>
    )
}

export default Blog;