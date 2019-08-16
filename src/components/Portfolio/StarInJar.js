import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import Star from '../../images/starjar.jpg'

class StarInJar extends React.Component {

  render() {
    return (
      <Container>
        <Col>
          <h4 class="text-center"><a href="http://lcphysx.lclark.edu/project/star-in-a-jar/" target="_blank" rel="noopener noreferrer"><strong> Star in A
              Jar: </strong></a></h4>
          Built a nuclear fusor by running a high voltage electrial current through a vaccuum chamber.
          <Image src={Star} className="portfolioSizing mx-auto d-block" alt="fusor pic" fluid/>
        </Col>
      </Container>
    )
  }
}

export default StarInJar;
