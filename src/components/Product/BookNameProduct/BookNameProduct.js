import {React , useState , useEffect} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import BookPlague from "../../../assets/Images/Books/Rectangle 13.png";
import './BookNameProduct.css'

const BookNameProduct = () => {
   const [Book , setBook] = useState([]);
   // useEffect(() => {
   //    const token = 'ln9cmSRAFLIDY6X9MOjoomOzEzghPZqE0skQQc8X';

   //    const config = {
   //       headers: { Authorization: `Bearer ${token}` }
   //    };

   //    const bodyParameters = {
   //       key: "value"
   //    };


   //    //    === get slides data from api ===
   //    axios.post(
   //       '/books/list/all',
   //       bodyParameters,
   //       config
   //    ).then((response) => {

   //       const infoBook = [];
   //       response.data.data.map((item) => {
   //          infoBook.push({
   //             id: item.id,
   //             name: item.name,
   //             image: item.images.data[0].image_url,

   //          })

   //       })
   //       setBook(infoBook)
   //       console.log(infoBook)
   //    })
   //       .catch((err) => {
   //          console.log(err.message)
   //       })



   //    //    === get slides data from api ===

   // }, [])


  
      // {
      //    Book.map((item) => {
            return (
               <Container className="BookNameProduct_parent_section">
                  <img src={BookPlague}  className="BookNameProduct_img"  />
                  <div>
                     <span>کتاب :</span>
                     <span>طاعون</span>
                  </div>
               </Container>
            )
      //    })
      // }

}

export default BookNameProduct;