import React from 'react'
import Navbar from '../Navigation/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import './Layout.css'

const Layout = (props) => {
  return (
    <Container fluid>
      <Navbar />
      <main className="content">{props.children}</main>
    </Container>
  )
}

export default Layout;
