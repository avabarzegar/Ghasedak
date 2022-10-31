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
      bookId: bookId,
    };
    // api config -end
    // book list data
    axios
      .post("/user/books/show", bodyParameters, config)
      .then((response) => {
        const productsData = response.data.data;
        console.log(response.data.data);
        setProduct({
          id: productsData.id,
          name: productsData.name,
          img: productsData.images.data[0].image_url,
          category: productsData.categories,
          author: productsData.authors,
          translator: productsData.translators,
          price: productsData.best_price,
          available: productsData.is_available,
          publisher: productsData.publisher,
          publishyear: productsData.publish_year,
          pagescount: productsData.pages_count,
          weight: productsData.weight,
          isbn: productsData.isbn,
          typename: productsData.typename,
          hashtags: productsData.hashtags,
          description: productsData.description,
          size: productsData.size,
          edition: productsData.edition,
          booktype: productsData.book_type,
          agecategory: productsData.age_category,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // book list data -end
  }, [bookId]);
  //   get data from api -end

  console.log(products);
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
