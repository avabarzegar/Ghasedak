import React from "react";
import EyeSeeAll from '../../assets/Images/icon/vuesax.png';
import './Seeallshops.css';

const seeallshops = (props) => {
   return (
      <div className={`see-all-container ${props.height}`}>
         <div className='see-all-shops'>
           <div className='see-img'>
             <img src={EyeSeeAll} width='100%' height='100%' alt='img eye' />
           </div>
           <p>{props.title}</p>
         </div>
      </div>
   )
} 

export default seeallshops;