import React, { useState } from 'react';
import {Button , Offcanvas} from 'react-bootstrap';
import './Offcanvas.css';

// === define bootstrap offcanvas ===

function StyledOffcanvas(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='offcanvas-btn' onClick={handleShow}>
        <img src={props.src} alt={props.alt} width='100%' height='100%' />
        {props.btnChildren}
      </Button>

      <Offcanvas className='search-offcanvas' placement='top' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.body}
        </Offcanvas.Body>
        {props.children}
      </Offcanvas>
    </>
  );
}

// === define bootstrap offcanvas end ===

export default StyledOffcanvas;