import React from 'react';
import { Col, Row, Container, ListGroup, ListGroupItem,  } from 'react-bootstrap'
import References from './References'
import Education from './Education'
import Skills from './Skills';
import Experience from './Experience';


class Resume extends React.Component {

  render() {
    return (
      <Container>

        <br />
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