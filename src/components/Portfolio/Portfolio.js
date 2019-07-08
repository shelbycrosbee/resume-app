import React from 'react';
import { Row, Col } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';



class Portfolio extends React.Component {


  render() {
    return (
      <Row>
        <Col md>
        <StarInJar />
        </Col>
        <Col md>
        <Stirling />
        </Col>
      </Row>
    )
  }
}
export default Portfolio;