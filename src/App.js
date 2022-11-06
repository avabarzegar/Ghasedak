import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes,useParams } from "react-router-dom";
import Home from "./Cotainers/Home/Home";
import Blog from "./Cotainers/Blog/Blog";
import Product from "./components/Product/Product";
import Search from "./Cotainers/Search/Search";
import SearchNull from "./Cotainers/SearchNull/SearchNull";
import SingleBlog from "./Cotainers/SingleBlog/SingleBlog";
import Loader from "./components/UI/Loader/Loader";
import { useHomeContext } from "./Context/HomeContext/HomeContext";
import ProductContextProvider from "./Context/ProductContext/ProductContext";


const App = (props) => {
 
  const { loading } = useHomeContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  return (
    <ProductContextProvider>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books/:bookId" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<SingleBlog />} />
            <Route path="*" element={<SearchNull />} />
          </Routes>
        )}
      </Router>
    </ProductContextProvider>
  );
};

export default App;
