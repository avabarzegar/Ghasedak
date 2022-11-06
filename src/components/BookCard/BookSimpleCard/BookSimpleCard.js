import React, { useRef } from "react";
import "./BookSimpleCard.css";
import Toman from "../../../assets/Images/icon/black-toman.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


// === define simple book card without details ===
const BookSimpleCard = (props)=>{

    const nameRef =useRef(null);

    // define tooltip for book name showing by hovering 
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {nameRef.current.innerHTML}
        </Tooltip>
    );
    // define tooltip for book name showing by hovering end

    return(
        <div className={`${props.className} simple-card-container`} id={props.id} onClick={props.click}>
            <div className="simple-book-card">
                <div className="simple-card-first-section">
                    <div className="simple-book-img">
                        <img src={props.img} width="100%" height="100%" alt="book" />
                    </div>
                    <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                    >
                      <span ref={nameRef} className="simple-book-title">{props.name}</span>
                    </OverlayTrigger>
                    
                </div>
                <div className="simple-card-second-section">
                    <div className="simple-card-prices">
                        {/* <span className="simple-prev-price">4.00.000</span> */}
                        <span className="simple-now-price">{props.price}</span>
                    </div>
                    <div className="simple-toman-container">
                        <img src={Toman} width="100%" height="100%" alt="toman" />
                    </div>
                </div>

            </div>
        </div>
    )

}

// === define simple book card without details end ===

export default BookSimpleCard;