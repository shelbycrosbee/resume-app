import React from 'react';
import { Col, Image } from 'react-bootstrap';
import Engine from '../../images/enginesilhouette.jpg'

class Stirling extends React.Component{

  render(){
    return(
      <Col>
      <h4 class='text-center'><a href="http://lcphysx.lclark.edu/project/the-stirling-engine-revisited/" style={{color: 'blue'}} target="_blank" rel="noopener noreferrer"><strong>
            <u>Stirling Engine Revisited:</u>
          </strong></a> </h4>
          Construction of a Stirling engine in order to investigate different thermodynamic
        properties
        <br/>
        <Image src={Engine} className="mx-auto d-block stirlingEngine" alt="engine" fluid/>
    </Col>
    )
  }
}
export default Stirling;