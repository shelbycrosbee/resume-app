import React from 'react';
import { Col, Row, Container,  } from 'react-bootstrap'
import References from './References'
import Education from './Education'
import Skills from './Skills';
import Experience from './Experience';
import Navbar from '../Navbar'
import './index.css'

class Resume extends React.Component {

  render() {
    return (
      <div >
         <Navbar/> 
         <Container>
        <br />
        <Row className='resFont'>
          <Experience />
        </Row>

        <Row className='resFont'>
          <Col>
           <Education/>
          </Col>

          <Col className={'justify-content-center resFont'}>
            <References/>
          </Col>
        </Row>

    
        <Row className='resFont'>
          <Skills/>
        </Row>
        </Container>
      </div >

    )
  }
}
export default Resume