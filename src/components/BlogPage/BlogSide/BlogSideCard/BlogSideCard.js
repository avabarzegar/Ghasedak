import React from "react";
import { Row , Col } from "react-bootstrap";
import "./BlogSideCard.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import BlogTitle from "../../../BlogTitle/BlogTitle";
import BlogRating from "../../../BlogRating/BlogRating";
import SmallBlogBtn from "../../../SmallBlogBtn/SmallBlogBtn";


// define sidebar card in blog page 
const BlogSideCard =(props)=>{
    return(
        <div className="blog-side-card">
            <Row>
                <Col sm={4} xs={3}>
                    <div className="blog-side-img">
                        <img src={props.img} width="100%" height="100%" alt="blog picture" />
                    </div>
                </Col>
                <Col sm={8} xs={9}>
                  <div className="column">
                    <BlogTitle 
                    title={props.title}
                    />
                    <span className="blog-card-text">
                        {props.text}
                    </span>
                  </div>
                </Col>
            </Row>
            <div>
                <BlogRating
                message={props.message}
                view={props.view}
                />
            </div>
            <div>
                <SmallBlogBtn
                author={props.author}
                date={props.date}
                />
            </div>

        </div>
    )
}


// define sidebar card in blog page end

export default BlogSideCard;