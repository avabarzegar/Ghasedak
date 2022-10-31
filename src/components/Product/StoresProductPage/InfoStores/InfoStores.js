import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Toman from "../../../../assets/Images/icon/toman.svg";
import Car from "../../../../assets/Images/icon/big-car-product.svg";
import BgGray from "../../../../assets/Images/icon/bg-gray-product.svg";
import "./InfoStores.css";
import { useProductsContext } from "../../../../Context/ProductContext/ProductContext";

const InfoStores = () => {
  // state and variables
  const { products, product, bookId } = useProductsContext();
  const [store, setStore] = useState([]);
  // state and variables

  useEffect(() => {
    // api config
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      bookId: bookId,
    };
    // api config -end
    // shop list data
    axios
      .post("/user/books/stores/list/all", bodyParameters, config)
      .then((response) => {

        const dataList = response.data.data;



        dataList.map((item) => {
          if (item.book.id === product.id) {
            setStore(item);
          }
        });
       
      });
      console.log(store)
    // shop list data -end
  }, [bookId]);

  return (
    <div className="parent-section-info-stores">
      <h1 className="shops-title">فروشندگان</h1>
      {/* {store.map((item) => {
        return (
          <Container className="Container-section-infostores">
            <div className="parent-section-name-of-bookstore">
              <img src={BgGray} alt="img of bookstore" />
              <span>فروشگاه:</span>
              <span>{item.store.name ? item.store.name : "---"}</span>
            </div>
            <div className="title-address-bookstore">
              <span>استان فارس - شیراز</span>
            </div>
            <div className="parent-section-price-and-situation">
              <div>
                <img src={Car} alt="img of car" />
                <span>
                  آماده ارسال
                </span>
              </div>
              <div>
                <span>{item.cart_price ? item.cart_price : "---"}</span>
                <img src={Toman} alt="toman price" />
              </div>
            </div>
          </Container>
        )
      })} */}

    </div>
  );
};

export default InfoStores;
