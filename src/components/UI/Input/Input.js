import React from "react";


const Input = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
      }
    }
  
    return <input type="text" onKeyDown={handleKeyDown} />
  }

export default Input;