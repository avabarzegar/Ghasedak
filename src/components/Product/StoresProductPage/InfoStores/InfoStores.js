import { React, useState, useEffect } from "react";
import axios from "axios";
import { Container, ListGroupItem } from "react-bootstrap";
import Toman from "../../../../assets/Images/icon/toman.svg";
import Car from "../../../../assets/Images/icon/big-car-product.svg";
import BgGray from "../../../../assets/Images/icon/bg-gray-product.svg";
import "./InfoStores.css";
import { useProductsContext } from "../../../../Context/ProductContext/ProductContext";
import { type } from "@testing-library/user-event/dist/type";

const InfoStores = () => {
  // state and variables
  const { products, product, bookId } = useProductsContext();
  const [store, setStore] = useState();
  // state and variables

  useEffect(() => {
    // api config
    const token = "nOe0ikqnjPSF1AgE9tjHt5jEZi8qQ3Iz6RW7hV5c";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      bookId: bookId,
      // storeId: bookId,
    };
    // api config -end
    // shop list data
    axios
      .post("/user/books/stores/list/all", bodyParameters, config)
      .then((response) => {
        let data = [];
        const dataList = response.data.data;
        dataList.map((item) => {
          data.push({
            name: item.store.name,
            price: item.cart_price,
          });
        });
        setStore(data);
      });

    // shop list data -end
  }, [bookId]);
 
  return (
    <div className="parent-section-info-stores">
      <h1 className="shops-title">فروشندگان</h1>
      {store == [] || store == undefined > 0 ? (
        <p>فروشنده ای برای این کتاب وجود ندارد</p>
      ) : (
        store?.map((item) => {
          return (
            <Container className="Container-section-infostores">
              <div className="parent-section-name-of-bookstore">
                <img src={BgGray} alt="img of bookstore" />
                <span>فروشگاه:</span>
                <span>{item.name ? item.name : "---"}</span>
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
                  <span>{item.price ? item.price : "---"}</span>
                  <img src={Toman} alt="toman price" />
                </div>
              </div>
            </Container>
          );
        })
      )}
    </div>
  );
};

export default InfoStores;
