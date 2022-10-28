import React , {useState , useEffect} from "react";
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

const IntroBooks = () => {


   useEffect(()=>{
      const token ='DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek';
     
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       key: "value"
    };
    
     
      //    === get slides data from api ===
      axios.post( 
        '/books/list/all',
        bodyParameters,
        config
      ).then((response)=>{

         console.log(response.data[1].name)
             
            //   const slideData=[];
            //   response.data.book_lists[1].books.data.map((item)=>{
            //     slideData.push({
            //         id:item.id ,
            //         name:item.name,
            //         image:item.images.data[0].image_url,
  
            //       })  
                   
            //   })
            //  setSlide(slideData)
          })
          .catch((err)=>{
              console.log(err.message)
          })
  
        
       
      //    === get slides data from api ===
  
      } , [])



















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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
               </p>
            </div>

            <div ref={div2} className="parent-section-all-detail-product">
               <span className="title-info-product">  مشخصات محصول :</span>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="عنوان کتاب:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="طاعون" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText=" نویسنده:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="آلبرکامو" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="مترجم:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="علیرضا رستمی" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="انتشارات:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نشر ایران" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText=" سال انتشار:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="1380" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="تعداد صفحات:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="256" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="شابک:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="1234567890" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="قطع:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="-----" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نوع جلد:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="کالینگو" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="گروه سنی:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="بزرگسال" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نوع کتاب:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="کتاب متنی" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="نسخه:" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="----" />
               </div>
               <div className="parent-section-info-product">
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="وزن" />
                  <TitleDetail titleDetailCustomStyle="styles-class" TitleText="450 گرم" />
               </div>
            </div>

            <div ref={div3}>
               <span className="title-sticky">برچسب ها</span>
               <div className="parent-section-stickies">
                  <span>#کتاب</span>
                  <span>#فلسفه</span>
                  <span>#آلبر</span>
                  <span>#اگزیستانسیالیسم</span>
                  <span>#کامو</span>
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