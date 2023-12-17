import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./nav.module.css";
import { getImageUrl } from "../../utils";

function Navigation() {
  return (
    <>
      <Navbar id="container" className="navbar navbar-light fixed-top" style={{ backgroundColor: "#6b3cc9"}} expand="sm">
        
        <Container style={{ maxWidth: '1440px'}}>
          <Navbar.Brand href="#home"><img className={styles.logoIcon} alt="logo image" src={getImageUrl("Nav/Logo.png")} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarTogglerIcon} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="#services" className={styles.navlink}>SERVICES</Nav.Link>
              <Nav.Link href="#aboutus" className={styles.navlink}>ABOUT US</Nav.Link>
              <Nav.Link href="#contactus" className={styles.navlink}>CONTACT US</Nav.Link>
              <Nav.Link href="#careers" className={styles.navlink}>CAREERS</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
