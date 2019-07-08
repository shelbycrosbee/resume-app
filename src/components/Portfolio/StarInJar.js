import React from 'react';
import { Container, Col } from 'react-bootstrap';
import image from './starjar.jpg'

class StarInJar extends React.Component{

  render(){
    return(
      <Container>
      <Col>
        <h2 class="text-center"><a href="http://lcphysx.lclark.edu/project/star-in-a-jar/" target="_blank"><strong> Star in A
              Jar: </strong></a><br />
          Built a nuclear fusor by creating a vacuum chamber and running a strong electric current
          inside.
        </h2>
        <img src={image} class="px-2 img-fluid rounded center-block" alt="fusor pic"/>
        </Col>
      </Container>
    )
  }
}

export default StarInJar;
