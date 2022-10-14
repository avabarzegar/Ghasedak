import React from "react";
import "./OtherBlogsCard.css";
import BlogTitle from "../../../BlogTitle/BlogTitle";
import BlogRating from "../../../BlogRating/BlogRating";
import BlogBtnSection from "../../../BlogBtnSection/BlogBtnSection";

// define other blogs single card
const OtherBlogsCard = (props) => {
  return (
    <div className="other-blogs-card">
      <div className="other-blogs-img">
        <img src={props.img} width="100%" height="100%" alt="picture"/>
      </div>
      <div className="other-blogs-content">
        <BlogTitle title={props.title} />
        <span className="other-blogs-text">{props.text}</span>
        <BlogRating message={props.message} view={props.view} />
      </div>
      <div className="other-blogs-btn">
      <BlogBtnSection
        author={props.author}
        date={props.date}
        flex="flex--column"
      />
      </div>
    </div>
  );
};
// define other blogs single card -end

export default OtherBlogsCard;
