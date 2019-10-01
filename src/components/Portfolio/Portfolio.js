import React from 'react';
import { Row, Col, Container, } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';
import Navbar from '../Navbar'
import Plant from './Plant'
import './index.css'
import Syncd from './Syncd';
import Erika from './Erika';
import Buffalo from './Buffalo'



class Portfolio extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <br />
          <h2 className="portFont text-center"><b>Coding</b></h2>
          <Row style={{ justifyContent: 'center' }}>
            <Col style={{ justifyContent: 'center', textAlign: 'center' }} md={4} lg={4}><Syncd /></Col>

            <Col style={{ justifyContent: 'center', textAlign: 'center' }} md={4} lg={4}><Buffalo /></Col>

            <Col style={{ justifyContent: 'center', textAlign: 'center' }} md={4} lg={4}><Erika /></Col>
          </Row>
          <br />
          <br />
          <h2 className="portFont text-center"><b>Undergraduate Physics Projects</b></h2>
          <br />
          <Row className="portFont">
            <Col md={6} sm={12}>
              <StarInJar />
            </Col>
            <Col>
              <Stirling />
            </Col>
          </Row>
          <br />
          <h2 className="portFont text-center" ><b>Art Portfolio</b></h2>
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