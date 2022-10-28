import { React, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import SearchContext from "./Context/SearchContext/SearchContext";
import ProductContextProvider from "./Context/ProductContext/ProductContext";

axios.defaults.baseURL = "https://nextghsdk.iran.liara.run/api/v1";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <StrictMode>
    <SearchContext>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </SearchContext>
  </StrictMode>
);
