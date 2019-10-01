import React, { Component } from 'react'
import { Image, Container } from 'react-bootstrap';
import bison from '../../images/bison.png';
import './index.css'

export default class Buffalo extends Component {
  render() {
    return (
      <Container className='portFont' style={{justifyContent:'center'}}>
      <Image src={bison} alt='bison spotter' className='bison'/>
      <br/>

      <h5> <b>Bison Spotter</b></h5>

      <p>This app allows you to either plot pins at a location where you have recently seen bison, or, search an area for the nearest hospital if you got too close. </p>

    </Container>
    )
  }
}
