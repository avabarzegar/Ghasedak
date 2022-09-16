import React from 'react';
import SearchInput from '../../../UI/SearchInput/SearchInput';
import { Container , Col, Row  } from 'react-bootstrap';
import Logo from '../../../../assets/Images/Logo/Logo.png';
import LogoText from '../../../../assets/Images/Logo/logo-text-white.png';
import Profile from '../../../../assets/Images/icon/profile.svg';
import ButtonLayout from '../../../UI/Button/ButtonLayout/ButtonLayout';
import ShopBasket from '../../../../assets/Images/icon/vuesax-shoping-bag.svg';
import Search from '../../../../assets/Images/icon/search-normal.svg';
import './TopNavbar.css';
import StyledOffcanvas from '../../../UI/Offcanvas/Offcanvas';

// == define top navbar section ==
const TopNavbar = () => {

  const searchInputResponsive=(
    <SearchInput placeholder='نام کتاب، نویسنده، ناشر و ... را جستجو کنید' />
  )

    return (
        <Container className='top-nav-container'>
            <Row className='top-navbar'>
              <Col xl={8} lg={7} sm={6} xs={8}>
                <Row className='top-navbar-right' >
                  <Col xl={3} lg={4} md={5} xs={6} className='logo-container'>
                    <div className='nav-logo'>
                     <img src={Logo} width='100%' height='100%' alt='logo' />
                    </div>
                    <div className='nav-logo-text'>
                     <img src={LogoText} width='100%' height='100%' alt='logo text' />
                    </div>
                  </Col>
                  <Col style={{paddingRight:'0'}} xl={9} lg={8} md={7} xs={6} >
                    <div className='search-box-nav'>
                      {searchInputResponsive}
                    </div>
                    <StyledOffcanvas
                      src={Search}
                      alt='search'
                      body={searchInputResponsive}
                    ></StyledOffcanvas>
                  </Col>
                </Row>
              </Col>   
              <Col xl={4} lg={5} sm={6} xs={4} className='top-navbar-left'>
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