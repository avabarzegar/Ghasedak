import React from "react";
import './BookSimpleCard.css';
import Toman from '../../../assets/Images/icon/black-toman.svg';

// === define simple book card without details ===
const BookSimpleCard = (props)=>{
    return(
        <div className='simple-card-container'>
            <div className='simple-book-card'>
                <div className='simple-card-first-section'>
                    <div className='simple-book-img'>
                        <img src={props.img} width='100%' height='100%' alt='book' />
                    </div>
                    <span className='simple-book-title'>{props.name}</span>
                </div>
                <div className='simple-card-second-section'>
                    <div className='simple-card-prices'>
                        <span className='simple-prev-price'>4.00.000</span>
                        <span className='simple-now-price'>2.00.000</span>
                    </div>
                    <div className='simple-toman-container'>
                        <img src={Toman} width='100%' height='100%' alt='toman' />
                    </div>
                </div>

            </div>
        </div>
    )

}

// === define simple book card without details end ===

export default BookSimpleCard;