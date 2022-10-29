import React, { useState, useEffect } from "react";
import "./IntroBooks.css";
import { useRef } from "react";
import TitleDetail from "../../DetailProductPage/TitleDetail/TitleDetail";
import { Form } from "react-bootstrap";
import StarNocolor from "../../../../assets/Images/icon/Star-no-color.svg";
import StyledButton from "../../../UI/Button/Button";
import CommentIcon from "../../../../assets/Images/icon/comment-btn-img.svg";
import CommentIconInComments from "../../../../assets/Images/icon/send-comment-icon-in-comments.svg";
import StarRating from "../../../../assets/Images/icon/start-rating.svg";
import axios from "axios";
import { useProductsContext } from "../../../../Context/ProductContext/ProductContext";

const IntroBooks = (props) => {


   const { products, bookName, product, setProduct } = useProductsContext();

   useEffect(() => {
      products.map((item) => {
         if (item.name === bookName) {
            setProduct(item);
         }

      });
   }, [bookName]);



   const div1 = React.useRef(null)
   const div2 = React.useRef(null)
   const div3 = React.useRef(null)
   const div4 = React.useRef(null)

   const styles = {
      width: '500px',
      height: '500px',
   };

   function smoothScroll(target) {
      const { top } = target.getBoundingClientRect()
      window.scrollTo({
         top: top + window.pageYOffset,
         behavior: "smooth"
      });

   }



   return (

      <div>
         <ul className="list-of-about-product">
            <li ref={div1} onClick={() => smoothScroll(div1.current)}>
               <span>درباره محصول</span>
            </li>
            <li ref={div2} onClick={() => smoothScroll(div2.current)}>
               <span>مشخصات محصول</span>
            </li>
            <li ref={div3} onClick={() => smoothScroll(div3.current)}>
               <span>برچسب ها</span>
            </li>
            <li ref={div4} onClick={() => smoothScroll(div4.current)}>
               <span>دیدگاه ها</span>
            </li>
         </ul>
         <div className="parent-section-all-info-product">
            <div ref={div1} className="outer-section-information-description">
               <span>توضیح کلی :</span>
               <p>
                  {product.description}
               </p>
            </div>

            <div ref={div2} className="parent-section-all-detail-product">
               <span className="title-info-product">  مشخصات محصول :</span>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="عنوان کتاب:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.name} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText=" نویسنده:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.author} />
               </div>

               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="مترجم:" />
                  {product.translator?.map((item, index) => {
                     <TitleDetail titleDetailCustomStyle="styles-class" TitleText={index} key={index} />
                  })}
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="انتشارات:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.publisher} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText=" سال انتشار:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.publishyear} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="تعداد صفحات:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.pagescount} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="شابک:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.isbn} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="قطع:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.size} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نوع جلد:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="----" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="گروه سنی:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="----" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نوع کتاب:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.booktype} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نسخه:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.edition} />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="وزن" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText={product.weight} />
               </div>
            </div>

            <div ref={div3}>
               <span className="title-sticky">برچسب ها</span>
               <div className="parent-section-stickies">
                  {product.hashtags?.map((item, index) => (
                     <TitleDetail titleDetailCustomStyle="styles-class" TitleText={item} key={index} />
                  ))}
               </div>
            </div>

            <div ref={div4} className="parent-comment-product-section">
               <span className="comments-title">دیدگاه ها</span>
               <Form>
                  <input placeholder="دیدگاه خود را بنویسید" className="input-send-comment" />

                  <div className="star-no-colors-parent">
                     <span>امتیاز شما به این محصول</span>
                     <div >
                        <img src={StarNocolor} />
                        <img src={StarNocolor} />
                        <img src={StarNocolor} />
                        <img src={StarNocolor} />
                        <img src={StarNocolor} />
                     </div>
                  </div>
                  <StyledButton href='#' button="send-comment-btn">
                     <img src={CommentIcon} alt="comment icon" />
                     <span className="send-comment-span-btn">ثبت دیدگاه شما</span>
                  </StyledButton>
               </Form>
               <div className="comment-section-outer-div">
                  <div className="outer-section-info-comment">
                     <div className="big-div-name-author-comment">
                        <img src={CommentIconInComments} alt="send comment icon" />
                        <span>صابر عمانی </span>
                     </div>
                     <div className="big-div-rating-comment">
                        <span>5 / 5</span>
                        <img src={StarRating} />
                     </div>
                  </div>
                  <p className="paragraph-comment">
                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی ...
                  </p>
               </div>
            </div>
         </div>
      </div>

   )
}

export default IntroBooks;