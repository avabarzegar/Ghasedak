import React from 'react';
import './Button.css';

// === make a custom button styles ===

const StyledButton =(props)=>{
    return(
        <a onClick={props.onClick} className={`custom-btn ${props.button}`} href={props.href}>
            {props.children}
        </a>
    )
}

export default StyledButton;