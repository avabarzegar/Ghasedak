import React from "react";
import InfoBookstitle from "./InfoBooktitle";
import './InfoBooks.css';
import ButtonLayout from "../../UI/Button/ButtonLayout/ButtonLayout";
import CartImage from '../../../assets/Images/icon/vuesax-add-to-cart-black.svg';



const InfoBooks = () => {
   return (
      <div className="infobooks-parent">
         <InfoBookstitle customstyle="head-title-info-book">از فرانکلین تا لاله زار</InfoBookstitle>
         <InfoBookstitle customstyle="sub-head-info-book">اثر فاخر همایون صنعت زاده</InfoBookstitle>
         <div className="publisher-info">
            <InfoBookstitle customstyle="publisher-name">انتشارات سمت</InfoBookstitle>
            <div className="date-publish">
               <InfoBookstitle>سال انتشار: </InfoBookstitle>
               <InfoBookstitle>1399</InfoBookstitle>
            </div>
         </div>
         <ButtonLayout button='btn-download-info-book' spancolordark="color-dard" src={CartImage} alt={'cartimg'} title={'افزودن به سبد خرید'} />
      </div>
   )
}

export default InfoBooks;