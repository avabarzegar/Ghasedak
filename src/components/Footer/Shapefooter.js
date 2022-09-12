import React from 'react';
import Container from 'react-bootstrap/Container';
import './Shapefooter.css';
import LogoType from '../../assets/Images/Logo/logo-text-white.png';
import Logo from '../../assets/Images/Logo/Logo.png';

const Shapefooter = () => {
   return (
      <Container fluid className='parent_copyright_text_logo_footer'>
   
            <div className='logo_img_footer'>
               <img className='logo_footer' src={Logo} alt='logo'></img>
               <img className='logo_type_footer' src={LogoType} alt='logo'></img>
            </div>
            <p>تمامی حقوق مادی و معنوی این سایت متعلق به پلتفرم قاصدک میباشد و هرگونه کپی برداری از آن پیگرد قانونی دارد. </p>
 
      </Container>
   )
}

export default Shapefooter;