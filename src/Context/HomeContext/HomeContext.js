import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const HomeContext = createContext({});

const HomeContextProvider = ({ children }) => {
  // variables and states

  //   book slider 1 (daily-discount)
  const [bookSliderOne, setBookSliderOne] = useState([]);
  const [bookOneTitle, setBookOneTitle] = useState("");
  //   book slider 2
  const [bookSliderTwo, setBookSliderTwo] = useState([]);
  const [bookTwoTitle, setBookTwoTitle] = useState("");
  //   book slider 3
  const [bookSliderThree, setBookSliderThree] = useState([]);
  const [bookThreeTitle, setBookThreeTitle] = useState("");
  //   book slider 4
  const [bookSliderFour, setBookSliderFour] = useState([]);
  const [bookFourTitle, setBookFourTitle] = useState("");
  //   book slider 5
  const [bookSliderFive, setBookSliderFive] = useState([]);
  const [bookFiveTitle, setBookFiveTitle] = useState("");
  //   book slider 6
  const [bookSliderSix, setBookSliderSix] = useState([]);
  const [bookSixTitle, setBookSixTitle] = useState("");

  // variables and states

  //   get data from api
  useEffect(() => {
    // api config
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    };
    // api config -end

    // bookSliderTwo book list data
    axios
      .post("/user/pwa/home", config)
      .then((response) => {
        const slideData = [];
        response.data.book_lists[0].books.data.map((item) => {
          slideData.push({
            id: item.id,
            name: item.name,
            image: item.images.data[1].image_url,
            price: item.best_price,
          });
        });

        setBookTwoTitle(response.data.book_lists[0].title);

        setBookSliderTwo(slideData);
      })
      .catch((err) => {
        console.log(err.message);
      });

    // bookSliderTwo book list data -end


  }, []);
  //   get data from api -end

  return (
    <HomeContext.Provider
      value={{
        bookSliderTwo,
        bookTwoTitle,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeContextProvider;
