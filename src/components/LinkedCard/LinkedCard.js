import React from "react";
import BookSimpleCard from "../BookCard/BookSimpleCard/BookSimpleCard";
import { Link } from "react-router-dom";

// define a simple book card with link to page product details
const LinkedCard = (props) => {
  return (
    <Link to={props.Link}>
      <BookSimpleCard
        className={props.className}
        id={props.id}
        click={props.click}
        img={props.img}
        name={props.name}
        price={props.price}
      />
    </Link>
  );
};

// define a simple book card with link to page product details -end

export default LinkedCard;
