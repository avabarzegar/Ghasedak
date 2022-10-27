import React from "react";
import TitleDetail from "../TitleDetail/TitleDetail";
import LogoPublisher from "../../../../assets/Images/icon/logo-publisher.svg";
import "./InfoBooksDetail.css"
import MoreInfo from "../../../../assets/Images/icon/more-info-product-page.svg";
import { Link } from "react-router-dom";
import CounterBooks from "../CounterBooks/CounterBooks";
import StyledButton from "../../../UI/Button/Button";
import AddToCart from "../../../../assets/Images/icon/vuesax-add-to-card.svg";

const InfoBooksDetail = (props) => {
   const {name, color} = props.product;

   return (
      <>
         <div className="publisher_name">
            <TitleDetail TitleText="ناشر:" />
            <img src={LogoPublisher} alt="logo publisher" />
            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText={name} />
         </div>
         <div className="parent_section_info_books parent_section_info_books-more_info ">
            <div>
               <TitleDetail TitleText="نویسنده:" />
               <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText={color} />
            </div>
            <Link className="more_info_parent_section">
               <img src={MoreInfo} alt="more info logo" />
               <span>توضیحات بیشتر</span>
            </Link>
         </div>
         <div className="parent_section_info_books">
            <TitleDetail TitleText="مترجم:" />

            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText="علیرضا رستمی " />
         </div>
         <div className="parent_section_info_books">
            <TitleDetail TitleText="تعداد صفحات:" />

            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText="256 " />
         </div>
         <div className="parent_section_info_books">
            <TitleDetail TitleText="گروه سنی:" />

            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText="بزرگسال " />
         </div>
         <div className="parent_section_info_books">
            <TitleDetail TitleText="نوع جلد:" />

            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText=" کالینگو" />
         </div>
         <div className="parent_section_info_books">
            <TitleDetail TitleText="وزن:" />

            <TitleDetail titleDetailCustomStyle="publisher_name_custom_style" TitleText="210گرم " />
         </div>
         <div className="parent-section-counter-btn-add-to-cart">
            <CounterBooks />
            
            <StyledButton href='#' button='add-to-cart-detailpage'>
               <img src={AddToCart} alt='img' />
               <span className='btn_footer_inner_text add-to-cart-detail-page-text'>افزودن به سبد خرید</span>
            </StyledButton>
         </div>
      </>
   )
}

export default InfoBooksDetail;