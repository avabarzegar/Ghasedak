import React from "react";
import StyledButton from "../Button";
import './ButtonLayout.css';


// == define layout of buttons ==

const ButtonLayout =(props)=>{
    return(
        <StyledButton 
        className='btn-layout'
        button={props.button}
        >
            <div className='btn-img'>
                <img src={props.src} width='100%' height='100%' alt={props.alt} />
            </div>
            <span>{props.title}</span>
        </StyledButton>
    )
}
// == define layout of buttons end ==


export default ButtonLayout;