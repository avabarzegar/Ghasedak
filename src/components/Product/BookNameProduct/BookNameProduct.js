import {React , useState , useEffect} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import BookPlague from "../../../assets/Images/Books/Rectangle 13.png";
import './BookNameProduct.css';

import { useAppContext } from "../../../Context/SearchContext/SearchContext";

const BookNameProduct = (porps) => {
   const { bookData, bookName } = useAppContext();
   const [product, setProduct] = useState({});


   useEffect(() => {
      bookData.map((item) => {
        if (item.name === bookName) {
           setProduct({
            id: item.id,
            name: item.name,
            img: item.img,
            category: item.category,
            author: item.author,
            translator: item.translator,
            hashtag: item.hashtag,
            price: item.price,
            available: item.available,
            publisher: item.publisher,
          });
        }
      });
      
    
    }, [bookName]);
            return (
               <Container className="BookNameProduct_parent_section">
                  <img src={product.img}  className="BookNameProduct_img"  />
                  <div>
                     <span>کتاب :</span>
                     <span>{product.name}</span>
                  </div>
               </Container>
            )

}

export default BookNameProduct;