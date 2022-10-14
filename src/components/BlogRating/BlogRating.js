import React from "react";
import Star from "../../assets/Images/Star 2.svg";
import Eye from "../../assets/Images/icon/eye.svg";
import Message from "../../assets/Images/icon/message.svg";
import "./BlogRating.css";

// define bloge rating information section
const BlogRating = (props) => {
  const n = 5;
  return (
    <div className="blog-rating-container">
      <div className="star-container">
        {[...Array(n)].map((item) => {
          return (
            <div className="star-img" key={item}>
              <img src={Star} width="100%" height="100%" alt="start" />
            </div>
          );
        })}
      </div>
      <div className="comment-number">
        <div className="comment-icon">
          <img src={Message} width="100%" height="100%" alt="icon" />
        </div>
        <span className="rating-details">{props.message}</span>
      </div>
      <div className="view-container">
        <div className="view-icon">
          <img src={Eye} width="100%" height="100%" alt="eye" />
        </div>
        <span className="rating-details">{props.view}</span>
      </div>
    </div>
  );
};
// define bloge rating information section end

export default BlogRating;
