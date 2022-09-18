import React from "react";
import './PriceAndDiscount.css';
import Toman from '../../../assets/Images/icon/toman.svg'
import PriceLabel from "./PriceLabel";

const PriceAndDiscount = () => {
   return (
      <div className="parnet-section-price">
         <div className="green-price-parent">
            <PriceLabel customstyle="green-color-txt">50.000</PriceLabel>
            <img src={Toman} alt='price img' />
         </div>
       
            <PriceLabel customstyle="red-color">100.000</PriceLabel>
      
      </div>
   )
}

export default PriceAndDiscount;