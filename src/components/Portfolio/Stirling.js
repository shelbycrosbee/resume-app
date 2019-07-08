import React from 'react';
import { Col, Row } from 'react-bootstrap';
import image from './enginesilhouette.jpg'

class Stirling extends React.Component{

  render(){
    return(
      <Col>
      <h2><a href="http://lcphysx.lclark.edu/project/the-stirling-engine-revisited/" target="_blank"><strong>
            Stirling Engine Revisited:
          </strong></a><br /> Construction of a Stirling engine in order to investigate different thermodynamic
        properties
      </h2>
      <img src={image} class="img-fluid rounded px-2 center-block"
        alt="engine pic" />
    </Col>
  
    )
  }
}
export default Stirling;