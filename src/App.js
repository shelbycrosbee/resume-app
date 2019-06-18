import React from 'react';
import './App.css';
import NavbarComponent from "./Navbar";
import BackgroundImagePage from "./BackgroundImagePage";
import Contact from "./Contact";
import Resume from "./Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import axios from "axios";
import { Route, Switch, Link, withRouter } from 'react-router-dom';



// import Background from '../images'

function App() {
  return (
    <Switch>
      <Route path="/resume" render={props =>
        <Resume />}
      />
      <Route exact path="/" render={props =>
        <Container>
          <NavbarComponent />
          <Row className="justify-content-center"><Button onClick="/resume" variant="secondary">Resume</Button></Row>

          <Row className="justify-content-center"><Contact /></Row>

          <BackgroundImagePage />
        </Container>}
      />



    </Switch>
  );
}

export default App;
