import React from "react";
import { Container } from "react-bootstrap";
import Toman from "../../../../assets/Images/icon/toman.svg";
import Car from "../../../../assets/Images/icon/big-car-product.svg";
import BgGray from "../../../../assets/Images/icon/bg-gray-product.svg";
import "./InfoStores.css"

const InfoStores = () => {
   return (
      <div className="parent-section-info-stores">
         <h1 className="shops-title">فروشندگان</h1>
         <Container className="Container-section-infostores">
            <div className="parent-section-name-of-bookstore">
               <img src={BgGray} alt="img of bookstore" />
               <span>فروشگاه:</span>
               <span>شهر کتاب</span>
            </div>
            <div className="title-address-bookstore">
               <span>استان فارس - شیراز</span>
            </div>
            <div className="parent-section-price-and-situation">
               <div>
                  <img src={Car} alt="img of car" />
                  <span>آماده ارسال</span>
               </div>
               <div>
                  <span>200.000</span>
                  <img src={Toman} alt="toman price" />
               </div>
            </div>
         </Container>
         <Container className="Container-section-infostores">
            <div className="parent-section-name-of-bookstore">
               <img src={BgGray} alt="img of bookstore" />
               <span>فروشگاه:</span>
               <span>شهر کتاب</span>
            </div>
            <div className="title-address-bookstore">
               <span>استان فارس - شیراز</span>
            </div>
            <div className="parent-section-price-and-situation">
               <div>
                  <img src={Car} alt="img of car" />
                  <span>آماده ارسال</span>
               </div>
               <div>
                  <span>200.000</span>
                  <img src={Toman} alt="toman price" />
               </div>
            </div>
         </Container>
      </div>
   )
}

export default InfoStores;