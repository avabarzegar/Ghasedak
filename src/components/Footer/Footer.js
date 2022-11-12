import React from "react";
import "../Footer/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footertitle from "./Footertitle";
import FooterSubtitle from "./FooterSubtitle";
import StyledButton from "../UI/Button/Button";
import PlayStore from "../../assets/Images/icon/Vector.svg";
import CafeBazar from "../../assets/Images/icon/Vector (2).svg";
import AppStore from "../../assets/Images/icon/Vector (1).svg";
import Ghasedak from "../../assets/Images/icon/Logo.svg";
import HeadPhone from "../../assets/Images/icon/headphone.svg";
import Instagram from "../../assets/Images/icon/Vector (5).svg";
import twitter from "../../assets/Images/icon/Vector (4).svg";
import LinkedIn from "../../assets/Images/icon/Vector (3).svg";
import Shapefooter from "./Shapefooter";

const Footer = () => {
  return (
    <>
      <Container fluid id="footer_id" className="parent_section_footer">
        <Container>
          <Row>
            <Col md={3}>
              <div className="section_title_links_footer">
                <Footertitle>لینک های اصلی</Footertitle>
                <FooterSubtitle href={"#"}>صفحه اصلی</FooterSubtitle>
                <FooterSubtitle href={"#"}>فروشگاه ها </FooterSubtitle>
                <FooterSubtitle href={"#"}> حساب کاربری</FooterSubtitle>
              </div>
            </Col>
            <Col md={3}>
              <div className="section_title_links_footer">
                <Footertitle>لینک های کاربردی</Footertitle>
                <FooterSubtitle href={"#"}> قوانین</FooterSubtitle>
                <FooterSubtitle href={"#"}> درباره ما </FooterSubtitle>
                <FooterSubtitle href={"#"}> سوالات متداول</FooterSubtitle>
                <FooterSubtitle href={"#"}> تماس با پشتیبانی</FooterSubtitle>
              </div>
            </Col>
            <Col md={6}>
              <div className="section_title_links_footer">
                <Footertitle>دانلود اپلیکیشن:</Footertitle>
                <p className="offer_to_download_app">
                  شما میتوانید اپلیکیشن قاصدک را از طریق لینک های زیر دربافت و
                  نصب نمایید
                </p>
                <div className="outer_section_footer_btn">
                  <Row>
                    <Col xl={3} lg={6} md={6} xs={12} sm={6}>
                      <StyledButton
                        href="https://ghasedakapp.com/ghasedak.apk"
                        button="ghasedak_download-app"
                      >
                        <span className="btn_footer_inner_text">Ghasedak</span>
                        <img src={Ghasedak} alt="img" />
                      </StyledButton>
                    </Col>
                    <Col xl={3} lg={6} md={6} xs={12} sm={6}>
                      <StyledButton
                        href="https://myket.ir/app/com.book_store"
                        button="cafe-bazar-button"
                      >
                        <span className="btn_footer_inner_text">Myket</span>
                        <img src={CafeBazar} alt="img" />
                      </StyledButton>
                    </Col>
                    <Col xl={3} lg={6} md={6} xs={12} sm={6}>
                      <StyledButton
                        href="http://www.sibche.com/applications/ghasedak"
                        button="App-store-button"
                      >
                        <span className="btn_footer_inner_text">Sibche</span>
                        <img src={AppStore} alt="img" />
                      </StyledButton>
                    </Col>
                    <Col xl={3} lg={6} md={6} xs={12} sm={6}>
                      <StyledButton
                        href="https://play.google.com/store/apps/details?id=com.book_store"
                        button="play-store-button"
                      >
                        <span className="btn_footer_inner_text">
                          Play Store
                        </span>
                        <img src={PlayStore} alt="img" />
                      </StyledButton>
                    </Col>
                  </Row>
                </div>
                <p className="support_team">
                  تیم پشتیبانی قاصدک همیشه پاسخگوی شمااست
                </p>
                <div className="support_team_social_media">
                  <div className="social_media_footer_parent">
                    <a href="#">
                      <img src={Instagram} alt="img" />
                    </a>
                    <a href="#">
                      <img src={twitter} alt="img" />
                    </a>
                    <a href="#">
                      <img src={LinkedIn} alt="img" />
                    </a>
                  </div>
                  <div className="support_team_number">
                    <span>98271-3325+</span>
                    <img src={HeadPhone} alt="img" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Shapefooter />
    </>
  );
};

export default Footer;
