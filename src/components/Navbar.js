import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavbarComponent extends React.Component {


  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">Shelby Miller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}
export default NavbarComponent