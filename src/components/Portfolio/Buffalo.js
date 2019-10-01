import React, { Component } from 'react'
import { Image, Container, Button } from 'react-bootstrap';
import bison from '../../images/bison.png';
import './index.css'

export default class Buffalo extends Component {
  render() {
    return (
      <Container className='portFont' style={{justifyContent:'center'}}>
      <Image src={bison} alt='bison spotter' className='bison'/>
      <br/>

      <Button href='https://github.com/shelbycrosbee/binge-front-end' target='blank'>Bison Spotter</Button>

      <p>This app allows you to either plot pins at a location where you have recently seen bison, or, search an area for the nearest hospital if you got too close. </p>

    </Container>
    )
  }
}
