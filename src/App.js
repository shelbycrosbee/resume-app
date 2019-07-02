import React from 'react';
import './App.css';
import NavbarComponent from "./Navbar";
import Contact from "./Contact";
import Resume from "./Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import axios from "axios";
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import ParallaxProvider from "react-scroll-parallax"




class App extends React.Component {

  render() {
    return (



        <Container>
          <NavbarComponent />
        </Container>
      



    );
  }
}
export default App;
