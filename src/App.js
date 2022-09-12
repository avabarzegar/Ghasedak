import React from "react";
import {Route,BrowserRouter as Router , Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./cotainers/Home/Home";
import Blog from "./cotainers/Blog/Blog";
import Product from "./cotainers/Product/Product";
import Search from "./cotainers/Search/Search"
import SearchNull from "./cotainers/SearchNull/SearchNull";
import SingleBlog from "./cotainers/SingleBlog/SingleBlog";

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