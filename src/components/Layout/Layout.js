import React from 'react'
import Navbar from '../Navigation/Navbar/Navbar';
import './Layout.css'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main className="content">{props.children}</main>
    </div>
  )
}

export default Layout;
