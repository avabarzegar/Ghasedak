import { React, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../../../Context/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HashtagDetail = (props) => {
  const { productHashtag, setProductHashtag, bookData, newData, setNewData } =
    useAppContext();
  const navigate = useNavigate();
  const hashtag=useRef(null);

  const hashtagHandler = (event) => {
    
    let filter = [];
    bookData.map((items) => {
      items.hashtag.map((item, index) => {
        if (item === hashtag.current.innerHTML) {
          filter.push(items);
        }
      });
    });
    // return book data with selected hashtag -end

    if (filter.length > 0) {
      // update all books list which will be shown
      setNewData(filter);
      if (newData.length > 0) {
        navigate("/search");
      }
    }
  };
  return (
    <span
     ref={hashtag}
      onClick={(event) => hashtagHandler(event)}
      className={`titledetail ${props.titleDetailCustomStyle}`}
    >
      {props.TitleText}
    </span>
  );
};

export default HashtagDetail;
