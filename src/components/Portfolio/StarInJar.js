import React from 'react';
import { Container, Col } from 'react-bootstrap';
import image from '../../images/starjar.jpg'

class StarInJar extends React.Component {

  render() {
    return (
      <Container>
        <Col>
          <h2 class="text-center"><a href="http://lcphysx.lclark.edu/project/star-in-a-jar/" target="_blank" rel="noopener noreferrer"><strong> Star in A
              Jar: </strong></a></h2>
          Built a nuclear fusor by creating a vacuum chamber and running a strong electric current
          inside.

        <img src={image} class="px-2 img-fluid rounded center-block" alt="fusor pic" />
        </Col>
      </Container>
    )
  }
}

export default StarInJar;
