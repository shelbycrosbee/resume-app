import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import Star from '../../images/starjar.jpg'
import '../../index.css'

class StarInJar extends React.Component {

  render() {
    return (
      <Container>
        <Col>
          <h4 class="text-center"><a href="http://lcphysx.lclark.edu/project/star-in-a-jar/" style={{color: 'blue'}}target="_blank" rel="noopener noreferrer"><strong> <u>Star in A
              Jar: </u></strong></a></h4>
          Built a nuclear fusor by running a high voltage electrial current through a vaccuum chamber.
          <Image src={Star} className="portfolioSizing mx-auto d-block" alt="fusor pic" fluid/>
        </Col>
      </Container>
    )
  }
}

export default StarInJar;
