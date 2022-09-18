import React from "react";
import './Herosuggest.css';
import '../../components/UI/Button/Button.css';
import BookDetailedCard from "../../components/BookCard/BookDetailedCard/BookDetailedCard";

const Herosuggest = () => {
   return (
         <section className="outest_section_suggest_book_hero">
            <div className="ghasedak_suggestion">
               پیشنهادات قاصدک
            </div>
            <BookDetailedCard />
         </section>
   )
}

export default Herosuggest;