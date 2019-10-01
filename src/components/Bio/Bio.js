import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'

export default class Bio extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container style={{ marginTop: "1em" }}>
          Hey! My name is Shelby Miller, I am an adventure enthousiast who dabbles in the wild world of software development. I love making ideas a reality by combining my creativity with the exciting tools available in development.
<br /><br/>
          I hail from Bend, Oregon originialy and now live in Southwest Montana. I love to ski, mountain bike, raft and surf but am a nerd at heart. I graduated with a degree in Physics in 2015 and have recently started a career in software development after a few years of being a raft guide and a ski technician in Big Sky, MT.
<br /><br/>
          I'm currently doing freelance web design, if you feel like we'd be a good match, feel free to contact me. Let's talk!
      </Container>
      </>
    )
  }
}
