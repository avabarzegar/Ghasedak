import React from 'react'
import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'
import Hreoslider from '../Heroslider/Hreoslider';



const Layout = (props) => {
  return (
    <div>
      <div>
      <Navbar />
      
      <main className="content">{props.children}</main>
      <Footer />
      
    </div>
    <div>
      <Hreoslider />
    </div>
    </div>
  )
}

export default Layout;
