import React from 'react';
import { Row, Col, Container, } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';
import Navbar from '../Navbar'
import Plant from './Plant'
import './index.css'



class Portfolio extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <br/>
        <h2 className="portFont text-center">Undergraduate Physics Projects</h2>
        <br/>
        <Row className="portFont">
          <Col md={6} sm={12}>
            <StarInJar/>
          </Col>
          <Col>
            <Stirling />
          </Col>
        </Row>
        <br/>
        <h2 className="portFont text-center" >Art Portfolio</h2>
        <Row 
        //style={{height: '300px'}}
        >
        <Plant />
        </Row>
        </Container>
      </div>
    )
  }
}
export default Portfolio;