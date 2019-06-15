import React from 'react';
import './App.css';
import NavbarComponent from "./Navbar";
import BackgroundImagePage from "./BackgroundImagePage";
import Contact from "./Contact";
import Resume from "./Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"



// import Background from '../images'

function App() {
  return (
    <Container>

      <NavbarComponent />
      <Row className="justify-content-center"><Button variant="secondary">Resume</Button></Row>

      <Row className="justify-content-center"><Contact /></Row>
      
      <BackgroundImagePage />

    </Container>
  );
}

export default App;
