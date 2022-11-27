import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const HomeContext = createContext({});

const HomeContextProvider = ({ children }) => {
  // variables and states
  const [loading, setLoading] = useState(true);
  //   book slider 1 ---(daily-discount/BookFirstSlider)
  const [bookSliderOne, setBookSliderOne] = useState([]);
  const [bookOneTitle, setBookOneTitle] = useState("");
  //   book slider 2 ---(MostSaleSlider)
  const [bookSliderTwo, setBookSliderTwo] = useState([]);
  const [bookTwoTitle, setBookTwoTitle] = useState("");
  //   book slider 3 ---(MostSaleMonthSlider)
  const [bookSliderThree, setBookSliderThree] = useState([]);
  const [bookThreeTitle, setBookThreeTitle] = useState("");
  //   book slider 4 ---(MostSaleYearSlider)
  const [bookSliderFour, setBookSliderFour] = useState([]);
  const [bookFourTitle, setBookFourTitle] = useState("");
  //   book slider 5 ---(PopularBooksSlider)
  const [bookSliderFive, setBookSliderFive] = useState([]);
  const [bookFiveTitle, setBookFiveTitle] = useState("");
  //   book slider 6 ---(ThirdPublisherSlider)
  const [bookSliderSix, setBookSliderSix] = useState([]);
  const [bookSixTitle, setBookSixTitle] = useState("");
  //   book slider 7 ---(SamiPublisherSlider)
  const [bookSliderSeven, setBookSliderSeven] = useState([]);
  const [bookSevenTitle, setBookSevenTitle] = useState("");
  //   Hero Banner Slider ---(Heroslider)
  const [heroSlider, setHeroSlider] = useState([]);
  //   Middle Slider ---(OfferdSliderBook)
  const [middleSlider, SetMiddleSlider] = useState([]);
  //   Stores Slider ---(bestshops)
  const [storeSlider, setStoreSlider] = useState([]);
  // suggestions ---(HeroSuggest)
  const [suggestSlider, setSuggestSlider] = useState([]);

  // variables and states

  //   get data from api
  useEffect(() => {
    // api config
    const token = "nOe0ikqnjPSF1AgE9tjHt5jEZi8qQ3Iz6RW7hV5c";

    const config = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };

    const bodyParameters = {
      key: "value",
    };

    // api config -end

    // Hero Banner Slider
    axios
      .post("/user/pwa/home", bodyParameters, config)
      .then((response) => {
        let heroBanner = [];
        const heroBannerData = response.data.banners.data[0].items.data;

        if (heroBannerData === [] || heroBannerData.length === 0) {
          heroBanner = [];
        } else {
          heroBannerData.map((item) => {
            heroBanner.push({
              id: item.id,
              title: item.title,
              image: item.image_url,
            });
          });
        }
        setHeroSlider(heroBanner);

        // Hero Banner Slider -end

        // Middle Banner Slider

        let bannerData = [];
        const MiddleBannerData = response.data.banners.data[1].items.data;

        if (MiddleBannerData === [] || MiddleBannerData.length === 0) {
          bannerData = [];
        } else {
          MiddleBannerData.map((item) => {
            bannerData.push({
              id: item.id,
              title: item.title,
              image: item.image_url,
            });
          });
        }
        SetMiddleSlider(bannerData);

        // Middle Banner Slider -end

        // Stores Slider
        let storeData = [];
        const storeSliderData = response.data.top_stores.data;
        if (storeSliderData === [] || storeSliderData.length === 0) {
          storeData = [];
        } else {
          storeSliderData.map((item) => {
            storeData.push({
              id: item.id,
              name: item.name ? item.name : null,
              image: item.logo_url,
            });
          });
        }
        setStoreSlider(storeData);

        // Stores Slider  -end

        // Ghasedak Suggestion

        let suggestionData = [];
        const suggestionResponse = response.data.suggestions.data;
        if (suggestionResponse === [] || suggestionResponse.length === 0) {
          suggestionData = [];
        } else {
          suggestionResponse.map((item) => {
            suggestionData.push({
              id: item.id,
              name: item.name ? item.name : null,
              author: item.authors ? item.authors : null,
              publisher: item.publisher ? item.publisher : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
              edition: item.edition ? item.edition : null,
            });
          });
        }
        setSuggestSlider(suggestionData);

        // Ghasedak Suggestion -end

        // bookSlider One book list data

        let slideDataOne = [];
        const responseDataOne = response.data.daily_discounts.data;

        if (responseDataOne === [] || responseDataOne.length === 0) {
          slideDataOne = [];
        } else {
          responseDataOne.map((item) => {
            slideDataOne.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
            });
          });
          setBookOneTitle(response.data.daily_discount.title);
        }
        setBookSliderOne(slideDataOne);

        // bookSlider One book list data -end

        // bookSlider Two book list data

        let slideDataTwo = [];
        const responseDataTwo = response.data.book_lists[0].books.data;

        if (responseDataTwo === [] || responseDataTwo.length === 0) {
          slideDataTwo = [];
        } else {
          responseDataTwo.map((item) => {
            slideDataTwo.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });
        }
        setBookTwoTitle(response.data.book_lists[0].title);
        setBookSliderTwo(slideDataTwo);

        // bookSlider Two book list data -end

        // bookSlider Three book list data

        let slideDataThree = [];
        const responseDataThree = response.data.book_lists[1].books.data;

        if (responseDataThree === [] || responseDataThree.length === 0) {
          slideDataThree = [];
        } else {
          responseDataThree.map((item) => {
            slideDataThree.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });

          setBookThreeTitle(response.data.book_lists[1].title);
        }
        setBookSliderThree(slideDataThree);

        // bookSlider Three book list data -end

        // bookSlider Four book list data

        let slideDataFour = [];
        const responseDataFour = response.data.book_lists[2].books.data;

        if (responseDataFour === [] || responseDataFour.length === 0) {
          slideDataFour = [];
        } else {
          responseDataFour.map((item) => {
            slideDataFour.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });

          setBookFourTitle(response.data.book_lists[2].title);
        }
        setBookSliderFour(slideDataFour);

        // bookSlider Four book list data -end

        // bookSlider Five book list data

        let slideDataFive = [];
        const responseDataFive = response.data.book_lists[3].books.data;
        if (responseDataFive === [] || responseDataFive.length === 0) {
          slideDataFive = [];
        } else {
          responseDataFive.map((item) => {
            slideDataFive.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });

          setBookFiveTitle(response.data.book_lists[3].title);
        }
        setBookSliderFive(slideDataFive);

        // bookSlider Five book list data -end

        // bookSlider Six book list data

        let slideDataSix = [];
        const responseDataSix = response.data.book_lists[4].books.data;
        if (responseDataSix === [] || responseDataSix.length === 0) {
          slideDataSix = [];
        } else {
          responseDataSix.map((item) => {
            slideDataSix.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });
          setBookSixTitle(response.data.book_lists[4].title);
        }
        setBookSliderSix(slideDataSix);

        // bookSlider Six book list data -end
        
        // bookSlider Seven book list data

        let slideDataSeven = [];
        const responseDataSeven = response.data.book_lists[5].books.data;
        if (responseDataSeven === [] || responseDataSeven.length === 0) {
          slideDataSeven = [];
        } else {
          responseDataSeven.map((item) => {
            slideDataSeven.push({
              id: item.id,
              name: item.name ? item.name : null,
              image:
                item.images.data.length > 0
                  ? item.images.data[0].image_url
                  : null,
              price: item.best_price ? item.best_price : null,
            });
          });
          setBookSevenTitle(response.data.book_lists[5].title);
        }
        setBookSliderSeven(slideDataSeven);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // bookSlider Seven book list data -end

    // loader timeout
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // loader timeout -end
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
        bookSliderSeven,
        bookSevenTitle,
        heroSlider,
        middleSlider,
        storeSlider,
        suggestSlider,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeContextProvider;
