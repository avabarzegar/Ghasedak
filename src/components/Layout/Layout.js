import React from 'react'
import './Layout.css'
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const Layout = (props) => {
  return (
    <>
      <Navbar navbar={props.navbarColor} />
        <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout;
