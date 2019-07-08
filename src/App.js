import React from 'react';
import './App.css';
import BackgroundImagePage from "./components/BackgroundImagePage";
import Resume from "./components/Resume/Resume";
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Portfolio from './components/Portfolio/Portfolio'



// import Background from '../images'

function App() {
  return (
    <Switch>
      <Route path="/resume" render={props =>
        <Resume />}
      />
      <Route path="/portfolio" render={props =>
        <Portfolio />}
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
