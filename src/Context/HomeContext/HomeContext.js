import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const HomeContext = createContext({});

const HomeContextProvider = ({ children }) => {
  // variables and states
  const [loading, setLoading] = useState(true);
  //   book slider 1 (daily-discount/BookFirstSlider)
  const [bookSliderOne, setBookSliderOne] = useState([]);
  const [bookOneTitle, setBookOneTitle] = useState("");
  //   book slider 2 (MostSaleSlider)
  const [bookSliderTwo, setBookSliderTwo] = useState([]);
  const [bookTwoTitle, setBookTwoTitle] = useState("");
  //   book slider 3 (MostSaleMonthSlider)
  const [bookSliderThree, setBookSliderThree] = useState([]);
  const [bookThreeTitle, setBookThreeTitle] = useState("");
  //   book slider 4 (MostSaleYearSlider)
  const [bookSliderFour, setBookSliderFour] = useState([]);
  const [bookFourTitle, setBookFourTitle] = useState("");
  //   book slider 5 (PopularBooksSlider)
  const [bookSliderFive, setBookSliderFive] = useState([]);
  const [bookFiveTitle, setBookFiveTitle] = useState("");
  //   book slider 6
  const [bookSliderSix, setBookSliderSix] = useState([]);
  const [bookSixTitle, setBookSixTitle] = useState("");

  // variables and states

  //   get data from api
  useEffect(() => {
    // api config
    const token = "qtjAvo6VkoiFRlQ7lufYbRh3R4u6vEnKEN19JKSz";

    const config = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };

    const bodyParameters = {
      key: "value",
    };

    // api config -end

    axios
      .post("/user/pwa/home", bodyParameters, config)
      .then((response) => {
        // bookSlider One book list data
        let slideDataOne = [];
        const responseDataOne = response.data.daily_discounts.data;

        if (responseDataOne === [] || responseDataOne.length === 0) {
          slideDataOne = [];
        } else {
          responseDataOne.map((item) => {
            slideDataOne.push({
              id: item.id,
              name: item.name,
              image: item.images.data[0].image_url,
            });
          });
          setBookOneTitle(response.data.daily_discount.title);
        }
        setBookSliderOne(slideDataOne);
        // bookSlider One book list data -end

        // bookSlider Two book list data
        const slideDataTwo = [];
        const responseDataTwo = response.data.book_lists[0].books.data;

        if (responseDataTwo === [] || responseDataTwo.length === 0) {
          slideDataTwo = [];
        } else {
          responseDataTwo.map((item) => {
            slideDataTwo.push({
              id: item.id,
              name: item.name,
              image: item.images.data[1].image_url,
              price: item.best_price,
            });
          });
        }

        setBookTwoTitle(response.data.book_lists[0].title);

        setBookSliderTwo(slideDataTwo);

        // bookSlider Two book list data -end
        // bookSlider Three book list data
        const slideDataThree = [];
        const responseDataThree = response.data.book_lists[1].books.data;

        if (responseDataThree === [] || responseDataThree.length === 0) {
          slideDataThree = [];
        } else {
          responseDataThree.map((item) => {
            slideDataThree.push({
              id: item.id,
              name: item.name,
              image: item.images.data[0].image_url,
              price: item.best_price,
            });
          });

          setBookThreeTitle(response.data.book_lists[1].title);
        }
        setBookSliderThree(slideDataThree);
        // bookSlider Three book list data -end

        // bookSlider Four book list data
        const slideDataFour = [];
        const responseDataFour = response.data.book_lists[2].books.data;

        if (responseDataFour === [] || responseDataFour.length === 0) {
          slideDataThree = [];
        } else {
          responseDataFour.map((item) => {
            slideDataFour.push({
              id: item.id,
              name: item.name,
              image: item.images.data[0].image_url,
              price: item.best_price,
            });
          });

          setBookFourTitle(response.data.book_lists[2].title);
        }
        setBookSliderFour(slideDataFour);
        // bookSlider Four book list data -end

        // bookSlider Five book list data
        const slideDataFive = [];
        const responseDataFive = response.data.book_lists[3].books.data;
        if (responseDataFive === [] || responseDataFive.length === 0) {
          slideDataThree = [];
        } else {
          responseDataFive.map((item) => {
            slideDataFive.push({
              id: item.id,
              name: item.name,
              image: item.images.data[0].image_url,
              price: item.best_price,
            });
          });

          setBookFiveTitle(response.data.book_lists[3].title);
        }
        setBookSliderFive(slideDataFive);
        // bookSlider Five book list data -end

        // loader timeout
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        // loader timeout -end
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  //   get data from api -end

  return (
    <HomeContext.Provider
      value={{
        bookSliderTwo,
        bookTwoTitle,
        bookSliderOne,
        bookOneTitle,
        bookSliderThree,
        bookThreeTitle,
        bookSliderFour,
        bookFourTitle,
        bookSliderFive,
        bookFiveTitle,
        bookSliderSix,
        bookSixTitle,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeContextProvider;
