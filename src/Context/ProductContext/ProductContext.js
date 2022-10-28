import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext({});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [bookName, setBookName] = useState("");
  const [product, setProduct] = useState({});

  //   get data from api
  useEffect(() => {
    // api config
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };
    // api config -end
    // book list data
    axios
      .post("/books/list/all", bodyParameters, config)
      .then((response) => {
        const productsData = [];
        response.data.data.map((item) => {
          productsData.push({
            id: item.id,
            name: item.name,
            img: item.images.data[0].image_url,
            category: item.categories,
            author: item.authors,
            translator: item.translators,
            hashtag: item.hashtags,
            price: item.best_price,
            available: item.is_available,
            publisher: item.publisher,
          });
        });
        setProducts(productsData);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book list data -end
  }, []);
  //   get data from api -end

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        bookName,
        setBookName,
        product,
        setProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => useContext(ProductsContext);
export default ProductContextProvider;
