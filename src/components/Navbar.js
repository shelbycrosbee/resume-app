import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../index.css'

class NavbarComponent extends React.Component {


  render() {
    return (
      <div className='navbarFont'>

        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">Shelby Miller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="tel:+15413069775" target="_blank">📞 (541)306-9775</NavDropdown.Item>
                <NavDropdown.Item href="mailto:shelbycrosbee@gmail.com" target="_blank"><i  className="far fa-envelope" ></i> shelbycrosbee@gmail.com
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/shelbycrosbee"><i className="fab fa-github-square"></i> shelbycrosbee
                 </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/shelby-miller-00754a182/"
                  target="_blank"><i className="fab fa-linkedin" ></i> Shelby
            Miller</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  };
}
export default NavbarComponent