import * as React from "react"
import BrandLogo from "./brand-logo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
  <header>
  <div className="container-fluid">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><BrandLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/iot">IOT</Nav.Link>
            <Nav.Link href="/aissat">AISSAT</Nav.Link>
            <Nav.Link href="/primasaver">PRIMASAVER</Nav.Link>
            <Nav.Link href="/finance-banking">FINANCE & BANKING</Nav.Link>
            <NavDropdown title="M2M" id="basic-nav-dropdown">
              <NavDropdown.Item href="/monstrack">MONSTRACK</NavDropdown.Item>
              <NavDropdown.Item href="/monstrack-train">MONSTRACK TRAIN</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/smartmedia">SMARTMEDIA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </header>
  );
}

export default BasicExample;