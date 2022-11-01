import React from "react";
import StyledButton from "../Button";
import './ButtonLayout.css';


// == define layout of buttons ==

const ButtonLayout =(props)=>{
    return(
        <StyledButton 
        button={props.button}
        href={props.href}
        onClick={props.onClick}
        >
            <div className='btn-img'>
                <img src={props.src} width='100%' height='100%' alt={props.alt} />
            </div>
            <span className={`${props.spancolordark} btn-title` }>{props.title}</span>
            {props.children}
        </StyledButton>
    )
}
// == define layout of buttons end ==


export default ButtonLayout;