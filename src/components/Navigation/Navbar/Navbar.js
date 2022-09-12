import React from "react";
import TopNavbar from "./TopNavbar/TopNavbar";
import NavItems from "./NavItems/NavItems";
import './Navbar.css';

// == define navbar section ==
const Navbar = () =>{
    return(
        <div className='nav-container'>
          <div className="top-menu">
            <TopNavbar />
          </div>  
          <div className='sub-menu'>
            <NavItems /> 
          </div>
        </div>
    )
}
// == define navbar section end ==


export default Navbar;