import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext({});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [bookId, setBookId] = useState(null);
  const [product, setProduct] = useState({});

  //   get data from api
  useEffect(() => {
    // api config
    const token = "DzTwF4yts6KjdR8NLdQdUtN0Y4YbcT35pVTy1Kek";

    const config = {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
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
            price: item.best_price,
            available: item.is_available,
            publisher: item.publisher,
            publishyear: item.publish_year,
            pagescount: item.pages_count,
            weight: item.weight,
            isbn: item.isbn,
            typename: item.typename,
            hashtags: item.hashtags,
            description: item.description,
            size: item.size,
            edition: item.edition,
            booktype: item.book_type,
            agecategory:item.age_category,
          });
          
        });
      
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
        bookId,
        setBookId,
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
