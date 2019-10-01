import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'

export default class Bio extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container style={{marginTop: "1em"}}>
        My name is Shelby Miller, I am an outdoor enthousiast who dabbles in the wild world of software development. I love making ideas a reality by combining my creativity with the exciting tools available in development. 

        I am hail originialy from Bend, Oregon and now live in Southwest Montana. I love to ski, mountain bike, raft and surf but am a nerd at heart. I graduated with a degree in Physics in 2015 and have recently started a career in software development.   
      </Container>
      </>
    )
  }
}
