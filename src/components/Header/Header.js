import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Dreamcar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navsbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#cars">Cars</Nav.Link>
            <Nav.Link href="#pricing">Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
