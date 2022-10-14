import React from "react";
import OtherBlogsCards from "./OtherBlogsCards/OtherBlogsCards";
import BlogsTitle from "../../BlogTitle/BlogTitle";
import "./OtherBlogs.css";

// define other blogs whole section
const OtherBlogs = () => {
  return (
    <section className="other-blogs">
      <BlogsTitle title="سایر مقالات" />
      <OtherBlogsCards />
    </section>
  );
};
// define other blogs whole section -end

export default OtherBlogs;
