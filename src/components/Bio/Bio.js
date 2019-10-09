import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Container, Col, Row } from 'react-bootstrap'
import './index.css'

export default class Bio extends Component {
  render() {
    return (
      < div className='bioBackground'>
        <Container >
          <Row  className='bioFont'>
          <Col>
          Hey there! My name is Shelby Miller, thanks for visiting my website. I am an adventure enthusiast who dabbles in the wild world of coding. I love making ideas a reality by combining creativity with the exciting tools software development offers.
<br /><br/>
          I live in Southwest Montana where I love to ski, mountain bike, raft--however I am a nerd at heart. I graduated with a degree in Physics in 2015 and began coding after a few years of being a raft guide and a ski technician out here in Big Sky country. I began coding thinking it would be a good way to get back into the Physics world and soon learned that I loved the challenge, creative thinking and interesting puzzles that coding presents. 
<br /><br/>
          I'm currently doing freelance web design, if you feel like we'd be a good match, feel free to contact me!
          </Col>
          <Col></Col>
          </Row>
      </Container>
      </div>
    )
  }
}
