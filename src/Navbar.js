import React from 'react';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Parallax, Background } from 'react-parallax';
import image from './images/banner.jpg'



class NavbarComponent extends React.Component {


  render() {
    return (
      <Parallax strength={300}>
        <Background className="custom-bg">
          
                <img src={image} alt="banner pic" />

            </Background>
           
        <h1>Shelby Miller</h1>
        
      </Parallax>
    )
  };
}
export default NavbarComponent