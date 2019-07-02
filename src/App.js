import React from 'react';
import './App.css';
import NavbarComponent from "./components/Navbar";
import BackgroundImagePage from "./components/BackgroundImagePage";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Layout from './components/Layout'



// import Background from '../images'

function App() {
  return (
    <Switch>
      <Route path="/resume" render={props =>
        <Resume />}
      />
      <Route exact path="/" render={props =>
        <Container>
          <Layout/>
          <BackgroundImagePage />
        </Container>}
      />



    </Switch>
  );
}

export default App;
