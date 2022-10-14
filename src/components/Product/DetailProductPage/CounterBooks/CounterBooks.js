import { React, useState } from 'react'
import DetailProductPage from '../DetailProductPage';
import CounterBookIcon from "../../../../assets/Images/icon/plus-mines-icon.svg";
import "./CounterBooks.css";

const CounterBooks = () => {
   const [counter, setCounter] = useState(1);

   //increase counter
   const increase = () => {
      setCounter(count => count + 1);
   };

   //decrease counter
   const decrease = () => {
      setCounter(count => count - 1);
   };

  if (counter == 0) {
   setCounter(1)
  }


   return (
      <div className='parent_section_counter'>
         <div className='title_counter_books'>
            <img src={CounterBookIcon} />
            <span>تعداد:</span>
         </div>
         <div className="counter">
            <div className="btn__container">
               <button className="control__btn-increase" onClick={increase}>+</button>
               <span className="counter__output">{counter}</span>
               <button className="control__btn-decrease" onClick={decrease}>-</button>
            </div>
         </div>
      </div>
      
   );
}

export default CounterBooks;