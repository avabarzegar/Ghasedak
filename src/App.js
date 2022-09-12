import React from "react";
import {Route,BrowserRouter as Router , Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./Cotainers/Home/Home";
import Blog from "./Cotainers/Blog/Blog";
import Product from "./Cotainers/Product/Product";
import Search from "./Cotainers/Search/Search"
import SearchNull from "./Cotainers/SearchNull/SearchNull";
import SingleBlog from "./Cotainers/SingleBlog/SingleBlog";

const App =()=>{
    return(
        <Router>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/" element={<Product />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/" element={<Search />} />
              <Route path="/" element={<SearchNull />} />
              <Route path="/" element={<SingleBlog />} />
            </Routes>  
          </Layout>
        </Router>
    )
}

export default App;