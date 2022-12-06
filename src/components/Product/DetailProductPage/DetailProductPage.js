import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailImage from "../../../assets/Images/icon/detailimageproduct.svg";
import ShareImageProduct from "../../../assets/Images/icon/share.svg";
import DetailImageLike from "../../../assets/Images/icon/like-product.svg";
import "./DetailProductPage.css";
import InfoBooksDetail from "./InfoBooksDetail/InfoBooksDetail";
import StoresProductPage from "../StoresProductPage/StoresProductPage";

const DetailProductPage = () => {
  return (
    <Container className="Parent-section-detail-product-page">
      <Row className="row-Parent-section-detail-product-page">
        <Col md={12} xl={7}>
          <div>
            <div className="detail_head_section">
              <div className="detail_title_section">
                <img src={DetailImage} />
                <span>مشخصات :</span>
              </div>
              <div className="detail_icons_head_section">
                <img src={ShareImageProduct} />
                <img src={DetailImageLike} />
              </div>
            </div>
            <div className="info-book-detail-container">
              <InfoBooksDetail />
            </div>
          </div>
        </Col>
        <Col md={12} xl={5} className="stores-product-page-in-detail-component">
          <StoresProductPage />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailProductPage;
