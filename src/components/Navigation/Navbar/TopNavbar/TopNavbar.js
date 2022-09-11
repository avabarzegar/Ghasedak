import React from 'react';
import SearchInput from '../../../UI/SearchInput/SearchInput';
import { Container , Col, Row } from 'react-bootstrap';
import Logo from '../../../../assets/Images/Logo/Logo.png';
import LogoText from '../../../../assets/Images/Logo/logo-text-white.png';
import Profile from '../../../../assets/Images/icon/profile.svg';
import ButtonLayout from '../../../UI/Button/ButtonLayout/ButtonLayout';
import ShopBasket from '../../../../assets/Images/icon/vuesax-shoping-bag.svg';
import './TopNavbar.css';

// == define top navbar section ==
const TopNavbar = () => {
    return (
        <Container className='top-nav-container'>
            <Row className='top-navbar'>
              <Col xs={8}>
                <Row className='top-navbar-right' >
                  <Col xs={3} className='logo-container'>
                    <div className='nav-logo'>
                     <img src={Logo} width='100%' height='100%' alt='logo' />
                    </div>
                    <div className='nav-logo-text'>
                     <img src={LogoText} width='100%' height='100%' alt='logo text' />
                    </div>
                  </Col>
                  <Col style={{paddingRight:'0'}} xs={8}>
                    <SearchInput placeholder='نام کتاب، نویسنده، ناشر و ... را جستجو کنید' />
                  </Col>
                </Row>
              </Col>   
              <Col  sm={4}  className='top-navbar-left'>
                <ButtonLayout
                button='purple'
                src={Profile}
                alt='profile'
                title='ثبت نام/ورود'
                />
                <a className='shop-basket-btn'>
                  <div className='shop-logo'>
                    <div className='shop-img btn-img'>
                      <img src={ShopBasket} width='100%' height='100%' alt='shop' />
                    </div>
                    <span>سبد خرید</span>
                  </div>
                  <div className='shop-basket-counter'>
                    <span>0</span> 
                  </div>
                </a>
              </Col>
            </Row>
        </Container>
    )
}

// == define top navbar section end ==

export default TopNavbar;