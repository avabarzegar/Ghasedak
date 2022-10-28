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
import { useEffect, useState } from "react";

const InfoBooksDetail = (props) => {
  // state and variables
  const { products, bookName, product, setProduct } = useProductsContext();
  console.log(bookName);
  console.log(products);
  useEffect(() => {
    products.map((item) => {
      if (item.name === bookName) {
        setProduct({
          id: item.id,
          name: item.name,
          img: item.img,
          category: item.category,
          author: item.author,
          translator: item.translator,
          hashtag: item.hashtag,
          price: item.price,
          available: item.available,
          publisher: item.publisher,
        });
      }
    });
  }, [bookName]);

  // state and variables -end
  console.log(product.author);
  return (
    <>
      <div className="publisher_name">
        <TitleDetail TitleText="ناشر:" />
        <img src={product.img} alt="logo publisher" />
        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText={product.publisher}
        />
      </div>
      <div className="parent_section_info_books parent_section_info_books-more_info ">
        <div>
          <TitleDetail TitleText="نویسندگان:" />
          {product.author?.map((item, index) => {
            <TitleDetail
              key={index}
              titleDetailCustomStyle="publisher_name_custom_style"
              TitleText={item}
            />;
          })}
        </div>
        <Link className="more_info_parent_section">
          <img src={MoreInfo} alt="more info logo" />
          <span>توضیحات بیشتر</span>
        </Link>
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="مترجم:" />

        {product.translator?.map((item, index) => {
          <TitleDetail
            key={index}
            titleDetailCustomStyle="publisher_name_custom_style"
            TitleText={item}
          />;
        })}
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="تعداد صفحات:" />

        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText="256 "
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="گروه سنی:" />

        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText="بزرگسال "
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="نوع جلد:" />

        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText=" کالینگو"
        />
      </div>
      <div className="parent_section_info_books">
        <TitleDetail TitleText="وزن:" />

        <TitleDetail
          titleDetailCustomStyle="publisher_name_custom_style"
          TitleText="210گرم "
        />
      </div>
      <div className="parent-section-counter-btn-add-to-cart">
        <CounterBooks />

        <StyledButton href="#" button="add-to-cart-detailpage">
          <img src={AddToCart} alt="img" />
          <span className="btn_footer_inner_text add-to-cart-detail-page-text">
            افزودن به سبد خرید
          </span>
        </StyledButton>
      </div>
      ;
    </>
  );
};

export default InfoBooksDetail;
