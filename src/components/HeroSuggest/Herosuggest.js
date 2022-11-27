import React from "react";
import "./Herosuggest.css";
import "../../components/UI/Button/Button.css";
import BookDetailedCard from "../../components/BookCard/BookDetailedCard/BookDetailedCard";
import "swiper/css";
import "swiper/css/scrollbar";

import Carousel from "react-bootstrap/Carousel";
// context
import { useHomeContext } from "../../Context/HomeContext/HomeContext";
import { useProductsContext } from "../../Context/ProductContext/ProductContext";
// context

const Herosuggest = () => {
  const { setBookId } = useProductsContext();
  const { suggestSlider } = useHomeContext();

  return (
    <>
      {suggestSlider === [] || suggestSlider.length === 0 ? null : (
        <section className="outest_section_suggest_book_hero">
          <div className="ghasedak_suggestion">پیشنهادات قاصدک</div>
          <Carousel className="slider-banner-hero slider_parent_section">
            {suggestSlider.map((item, index) => {
              return (
                <Carousel.Item interval={4000} key={item.id}>
                  <BookDetailedCard
                    author={item.author}
                    onClick={() => setBookId(item.id)}
                    Link={`/books/${item.id}`}
                    name={item.name}
                    edition={item.edition}
                    price={item.price}
                    publisher={item.publisher}
                    image={item.image}
                    alt={"book img"}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </section>
      )}
    </>
  );
};

export default Herosuggest;
