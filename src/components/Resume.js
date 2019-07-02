import React from 'react';
import { Col, Row, Container, ListGroup, ListGroupItem,  } from 'react-bootstrap'
import References from './Resume/References'
import Education from './Resume/Education'
import Skills from './Resume/Skills';
import Experience from './Resume/Experience';


class Resume extends React.Component {

  render() {
    return (
      <Container>

        <Row><br /></Row>
        <Row>
          <Experience />
        </Row>

        <Row>
          <Col>
           <Education/>
          </Col>

          <Col>
            <References/>
          </Col>
        </Row>

        <br />
        <Row>
          <Skills/>
        </Row>

      </Container >

    )
  }
}
export default Resume