import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';
import Navbar from '../Navbar'



class Portfolio extends React.Component {


  render() {
    return (
      <Container>
        <Navbar />
        <Row>
          <Col md>
            <StarInJar />
          </Col>
          <Col md>
            <Stirling />
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Portfolio;