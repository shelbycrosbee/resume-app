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
              <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Physics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Art</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}
export default NavbarComponent