import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container className="header">
        <Navbar.Brand href="#home">Dreamcar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navsbar-nav">
          <Nav className="me-auto header-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#cars">Cars</Nav.Link>
            <Nav.Link href="#contact">Contact </Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
