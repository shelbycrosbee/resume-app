import React from 'react';
import { Row, Col, } from 'react-bootstrap'
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
        <br/>
        <h2 className="portFont text-center">Undergraduate Physics Projects</h2>
        <Row className="portFont">
          <Col md={6}>
            <StarInJar/>
          </Col>
          <Col md={6}>
            <Stirling />
          </Col>
        </Row>
       
          
        <br/>
        <h2 className="portFont text-center" ><u>Art Portfolio</u></h2>
        <Row style={{height: '300px'}}>
        <Plant />
        </Row>
      </div>
    )
  }
}
export default Portfolio;