import React from 'react'
import './NavItems.css'
import {Container , Nav , Navbar , } from 'react-bootstrap';
import ButtonLayout from '../../../UI/Button/ButtonLayout/ButtonLayout';
import { Link } from 'react-router-dom';
import Download from '../../../../assets/Images/icon/receive-square.svg';


// === making navbar list ===

const NavItems = () => {
  return (
    <Container className='navbar-parent'>
      <Navbar className='nav' expand='md'>
        <div className='responsive-btn-container center'>
          <Navbar.Toggle />
          <ButtonLayout
            button='purple'
            src={Download}
            alt='download application'
            title='دانلود اپلیکیشن'
            />
        </div>
        <Navbar.Collapse className='navbar-collapse'>
          <Nav
            className="my-2 my-md-0"
          >
              <Link className='nav-link' to="/">صفحه اصلی</Link>
              <Link className='nav-link' to="/product">فروشگاه ها</Link>
              <Link className='nav-link' to="/blog">بلاگ</Link>
              <Link className='nav-link' to="/">تماس با پشتیبانی</Link>
              <Link className='nav-link' to="/">قوانین</Link>
              <Link className='nav-link' to="/">درباره ما</Link>
              <Link className='nav-link' to="/">سوالات متداول</Link>
          </Nav>
          <ButtonLayout
            button='purple'
            src={Download}
            alt='download application'
            title='دانلود اپلیکیشن'
            />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

// === making navbar list end ===



export default NavItems
