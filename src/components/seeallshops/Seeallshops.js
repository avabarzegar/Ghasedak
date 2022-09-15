import React from "react";
import Eyeseeall from '../../assets/Images/icon/vuesax.png';
import './Seeallshops.css';

const SeeAllShops = () => {
   return (
      <div className='see-all-shops'>
         <img src={Eyeseeall} alt='img eye' />
         <p>مشاهده همه فروشگاه ها</p>
      </div>
   )
} 

export default SeeAllShops;