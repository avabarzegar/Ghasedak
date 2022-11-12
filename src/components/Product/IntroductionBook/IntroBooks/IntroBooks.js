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
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";
import HashtagDetail from "../../DetailProductPage/HashtagDetail/HashtagDetail";
import { useNavigate } from "react-router-dom";

const IntroBooks = () => {
  const {
    bookData,
    newData,
    setNewData,
    setSorting,
    setSearchData,
    setPrevData,
    setSearchValue,
    setAvailable,
  } = useAppContext();
  const { product } = useProductsContext();
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const hashtag = useRef(null);
  const saveSelectedFilter = [];

  useEffect(() => {
    if (data) {
      // api config
      const token = "nOe0ikqnjPSF1AgE9tjHt5jEZi8qQ3Iz6RW7hV5c";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // api config -end

      // save selected filter in a varible

      saveSelectedFilter.push({
        title: "برچسب ها",
        eventFilter: data,
      });

      // save selected filter in a varible -end

      // update applied filter list in sorting state
      setSorting(saveSelectedFilter);
      setSearchData([]);
      setPrevData([]);
      setSearchValue("");
      setAvailable(false);
      // update applied filter list in sorting state

      // api config

      const bodyParameters = {
        hashtag: data,
      };
      // api config -end

      // book list data
      axios
        .post("/books/list/all", bodyParameters, config)
        .then((response) => {
          const filter = [];
          response.data.data.map((item) => {
            filter.push({
              id: item.id,
              name: item.name,
              img: item.images.data,
              category: item.categories,
              author: item.authors,
              translator: item.translators,
              hashtag: item.hashtags,
              price: item.best_price,
              available: item.is_available,
              publisher: item.publisher,
            });
          });

          if (filter.length > 0) {
            navigate("/search");

            setNewData((current) => {
              const updatedData = [];
              filter.map((items) => {
                updatedData.push(items);
              });

              if (current) {
                [...current].map((items) => {
                  updatedData.push(items);
                });
              }

              // make data unique
              const returnData = updatedData.filter(
                (ele, ind) =>
                  ind ===
                  updatedData.findIndex(
                    (elem) => elem.id === ele.id && elem.id === ele.id
                  )
              );
              // make data unique -end

              return returnData;
            });
            navigate("/search");
            // update all books list which will be shown -end
          } else {
            navigate("*");
            setNewData([]);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // book list data -end
    }
  }, [data]);

  const hashtagHandler = (item) => {
    setData(item);
  };

  const div1 = React.useRef(null);
  const div2 = React.useRef(null);
  const div3 = React.useRef(null);
  const div4 = React.useRef(null);

  const styles = {
    width: "500px",
    height: "500px",
  };

  function smoothScroll(target) {
    const { top } = target.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
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
          <p>{product.description}</p>
        </div>

        <div ref={div2} className="parent-section-all-detail-product">
          <span className="title-info-product"> مشخصات محصول :</span>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="عنوان کتاب:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.name}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText=" نویسنده:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.author}
            />
          </div>

          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="مترجم:"
            />
            {product.translator?.map((item, index) => {
              <TitleDetail
                titleDetailCustomStyle="styles-class"
                TitleText={index}
                key={index}
              />;
            })}
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="انتشارات:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.publisher}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText=" سال انتشار:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.publishyear}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="تعداد صفحات:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.pagescount}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="شابک:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.isbn}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="قطع:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.size}
            />
          </div>

          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="گروه سنی:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.agecategory}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="نوع کتاب:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.booktype}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="نسخه:"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.edition}
            />
          </div>
          <div className="parent-section-info-product">
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText="وزن"
            />
            <TitleDetail
              titleDetailCustomStyle="styles-class"
              TitleText={product.weight}
            />
          </div>
        </div>

        <div ref={div3}>
          <span className="title-sticky">برچسب ها</span>
          <div className="parent-section-stickies">
            {product.hashtags?.map((item, index) => (
              <span
                key={index}
                ref={hashtag}
                onClick={() => hashtagHandler(item)}
                className="titledetail product-hashtag"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div ref={div4} className="parent-comment-product-section">
          <span className="comments-title">دیدگاه ها</span>
          <Form>
            <input
              placeholder="دیدگاه خود را بنویسید"
              className="input-send-comment"
            />

            <div className="star-no-colors-parent">
              <span>امتیاز شما به این محصول</span>
              <div>
                <img src={StarNocolor} />
                <img src={StarNocolor} />
                <img src={StarNocolor} />
                <img src={StarNocolor} />
                <img src={StarNocolor} />
              </div>
            </div>
            <StyledButton href="#" button="send-comment-btn">
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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBooks;
