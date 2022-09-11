import React from 'react'
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main className="content">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
