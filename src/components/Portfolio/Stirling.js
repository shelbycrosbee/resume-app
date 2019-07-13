import React from 'react';
import { Col, } from 'react-bootstrap';
import image from '../../images/enginesilhouette.jpg'

class Stirling extends React.Component{

  render(){
    return(
      <Col>
      <h2 class='text-center'><a href="http://lcphysx.lclark.edu/project/the-stirling-engine-revisited/" target="_blank" rel="noopener noreferrer"><strong>
            Stirling Engine Revisited:
          </strong></a> </h2>
          Construction of a Stirling engine in order to investigate different thermodynamic
        properties
      
      <img src={image} class="img-fluid rounded px-2 center-block"
        alt="engine pic" />
    </Col>
  
    )
  }
}
export default Stirling;