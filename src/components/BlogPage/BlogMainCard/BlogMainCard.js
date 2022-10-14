import React from "react";
import "./BlogMainCard.css";
import Img from "../../../assets/Images/Asset 2@320x-8 1.png";
import BlogTitle from "../../BlogTitle/BlogTitle";
import BlogRating from "../../BlogRating/BlogRating";
import BlogBtnSection from "../../BlogBtnSection/BlogBtnSection";
import { Row ,Col } from "react-bootstrap";

// define blog main card
const BlogMainCard = () => {
  return (
    <section className="blog-main-card">
      <div className="blog-main-img">
        <img src={Img} width="100%" height="100%" alt="picture" />
      </div>
      <div className="blog-main-context">
        <Row className="blog-main-card-head">
          <Col xl={7} lg={6}>
            <BlogTitle title="روز جهانی کتاب هراه با قاصدک" />
          </Col>
          <Col xl={5} lg={6} className="blog-main-rating"> 
            <BlogRating message="23" view="321" />
          </Col>
        </Row>
        <span className="blog-main-content">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ ...
        </span>
      </div>
      <div className="blog-main-card-btn">
        <BlogBtnSection
          className="flex--row"
          border="border--left"
          author="ساغر خوش نویس"
          date="1401/05/22"
        />
      </div>
    </section>
  );
};
// define blog main card -end

export default BlogMainCard;
