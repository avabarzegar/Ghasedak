
import React from "react";
import TitleDetail from "../TitleDetail/TitleDetail";
import LogoPublisher from "../../../../assets/Images/icon/logo-publisher.svg";
import "./InfoBooksDetail.css";
import MoreInfo from "../../../../assets/Images/icon/more-info-product-page.svg";
import { Link } from "react-router-dom";
import CounterBooks from "../CounterBooks/CounterBooks";
import StyledButton from "../../../UI/Button/Button";
import AddToCart from "../../../../assets/Images/icon/vuesax-add-to-card.svg";
// context
import { useProductsContext } from "../../../../Context/ProductContext/ProductContext";


const InfoBooksDetail = (props) => {
  // state and variables
  const { product } = useProductsContext();
  const alertshow = () => {
    alert("میتوانید برای خرید کتاب از طریق اپلیکیشن قاصدک اقدام کنید");
  }

  return (
    <>
      <div className="publisher_name">
        <TitleDetail TitleText="ناشر:" />
        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.publisher}
        />
      </div>
      <div className="parent_section_info_books parent_section_info_books-more_info ">
        <div>
          <TitleDetail TitleText="نویسندگان:" />
          {product.author?.map((item, index) => (
            <TitleDetail
              key={index}
              titleDetailCustomStyle="publisher_name_custom_style"
              TitleText={item}
            />
          ))}
        </div>
        {/* <Link className="more_info_parent_section">
          <img src={MoreInfo} alt="more info logo" />
          <span>توضیحات بیشتر</span>
        </Link> */}
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="مترجم:" />


        {product.translator?.map((item, index) => (
          <TitleDetail
            key={index}
            titleDetailCustomStyle="publisher_name_custom_style"
            TitleText={item}
          />
        ))}
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="تعداد صفحات:" />


        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.pagescount}
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="گروه سنی:" />


        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.agecategory}
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="قطع :" />


        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.size}
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="سال انتشار:" />


        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.publishyear}
        />
      </div>
      <div className="parent-section-counter-btn-add-to-cart">
        <CounterBooks />


        <StyledButton onClick={alertshow}  button="add-to-cart-detailpage">
          <img src={AddToCart} alt="img" />
          <span className="btn_footer_inner_text add-to-cart-detail-page-text">
            افزودن به سبد خرید
          </span>
        </StyledButton>
      </div>
    </>
  );
};


export default InfoBooksDetail;
