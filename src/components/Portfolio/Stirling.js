import React from 'react';
import { Col, Image } from 'react-bootstrap';
import Engine from '../../images/enginesilhouette.jpg'

class Stirling extends React.Component{

  render(){
    return(
      <Col>
      <h4 class='text-center'><a href="http://lcphysx.lclark.edu/project/the-stirling-engine-revisited/" target="_blank" rel="noopener noreferrer"><strong>
            Stirling Engine Revisited:
          </strong></a> </h4>
          Construction of a Stirling engine in order to investigate different thermodynamic
        properties
        
        <Image src={Engine} className="portfolioSizing" alt="fusor pic" />
    </Col>
    )
  }
}
export default Stirling;