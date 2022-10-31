import { React } from "react";
import { Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./SearchTabs.css";
import LinkedCard from "../../LinkedCard/LinkedCard";
import { useAppContext } from "../../../Context/SearchContext/SearchContext";
import { useProductsContext } from "../../../Context/ProductContext/ProductContext";

function SearchTabs() {
  // states and variables
  const { newData } = useAppContext();
  const { setBookId } = useProductsContext();
  // states and variables -end

  
  return (
    <section className="search-tabs-container">
      <Row>
        {
          //   define books in tabs
          // newData?.length === 0 ? (
          //   <Navigate to="*" />
          // ) : (
            newData.map((item) => {
              return (
                <Col className="search-page-books" xl={3} lg={4} sm={6}>
                  <LinkedCard
                    className="search-book-card"
                    click={()=>setBookId(item.id)}
                    Link={`/products/${item.id}`}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </Col>
              );
            })
          // )
          //   define books in tabs end
        }
      </Row>
    </section>
  );
}

export default SearchTabs;
