import React from "react";
import './PriceandDiscount.css';
import Toman from '../../../assets/Images/icon/toman.svg'
import PriceLabel from "./PriceLabel";

const PriceandDiscount = () => {
   return (
      <div className="parnet-section-price">
         <div className="green-price-parent">
            <PriceLabel className='green-price-child'>50.000</PriceLabel>
            <img src={Toman} alt='price img' />
         </div>
         <div className="red-price-child">
            <PriceLabel>100.000</PriceLabel>
         </div>
      </div>
   )
}

export default PriceandDiscount;