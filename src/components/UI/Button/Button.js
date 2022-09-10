import React from 'react';
import './Button.css';

// === make a custom button styles ===

const StyledButton =(props)=>{
    return(
        <a className='custom-btn' href={props.href}>
            {props.children}
        </a>
    )
}

export default StyledButton;