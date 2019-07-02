import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavbarComponent extends React.Component{


render(){
  return(
    <div>

<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Shelby Miller</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Resume</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Star In A Jar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Stirling Engine</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Projects Home</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
</div>
  )};
}
export default NavbarComponent