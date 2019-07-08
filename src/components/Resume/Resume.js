import React from 'react';
import { Col, Row, Container,  } from 'react-bootstrap'
import References from './References'
import Education from './Education'
import Skills from './Skills';
import Experience from './Experience';
import Navbar from '../Navbar'

class Resume extends React.Component {

  render() {
    return (
      <Container>
         <Navbar/> 
        <br />
        <Row>
          <Experience />
        </Row>

        <Row>
          <Col>
           <Education/>
          </Col>

          <Col className={'justify-content-center'}>
            <References/>
          </Col>
        </Row>

    
        <Row>
          <Skills/>
        </Row>

      </Container >

    )
  }
}
export default Resume