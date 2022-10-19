import React , {useRef} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './BestShopsSingleSlide.css';


const BestShopssingleslide = (props) => {
   const nameRef =useRef(null);
   return (
      // <div>
      //    <div className='slides-near-shops'>
            /* <div className='bg-color-shops'>
               <img src={props.activeImage} alt="active-icon" width="100%" height="100%" />
            </div> */
            
      //    </div>
      // </div>
      <span ref={nameRef}>{props.acticeText}</span>
   )
}

export default BestShopssingleslide;