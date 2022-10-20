import { React } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import BookSimpleCard from "../../BookCard/BookSimpleCard/BookSimpleCard";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import { Navigate } from "react-router-dom";
import "./SearchTabs.css";

function SearchTabs() {
  // states
  const { newData } = useAppContext();
  // states end

  return (
    <section className="search-tabs-container">
      {/* <Tabs
        defaultActiveKey="0"
        id="uncontrolled-tab-example"
        className="search-tabs"
      >
        <Tab eventKey="disabled" title="مرتب سازی بر اساس :" disabled />
        {["گرانترین", "ارزانترین"].map((items, index) => {
          return (
            <Tab eventKey={index} key={index} title={items}> */}
              <Row>
                {
                  //   define books in tabs
                  newData?.length === 0 ? (
                    <Navigate to="*" />
                  ) : (
                    newData.map((item, index) => {
                      return (
                        <Col className="search-page-books" xl={3} lg={4} sm={6}>
                          <BookSimpleCard
                            className="search-book-card"
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                          />
                        </Col>
                      );
                    })
                  )
                  //   define books in tabs end
                }
              </Row>
            {/* </Tab>
          );
        })}
      </Tabs> */}
    </section>
  );
}

export default SearchTabs;
