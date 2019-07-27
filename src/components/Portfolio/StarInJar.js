import React from 'react';
import { Container, Col } from 'react-bootstrap';

class StarInJar extends React.Component {

  render() {
    return (
      <Container>
        <Col>
          <h4 class="text-center"><a href="http://lcphysx.lclark.edu/project/star-in-a-jar/" target="_blank" rel="noopener noreferrer"><strong> Star in A
              Jar: </strong></a></h4>
          Built a nuclear fusor by creating a vacuum chamber and running a strong electric current
          inside.
        </Col>
      </Container>
    )
  }
}

export default StarInJar;
