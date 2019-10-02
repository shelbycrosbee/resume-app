import React, { Component } from 'react'
import syncd from '../../images/syncd.gif'
import { Image, Button, Container } from 'react-bootstrap'
import './index.css'

export default class Syncd extends Component {
 
  render() {
    return (
      <Container className='portFont' style={{justifyContent:'center'}}>
        <Image src={syncd} alt='syncd-up'  className='syncdUp'/>
        <br/>
        
        <Button href='https://syncd-up.herokuapp.com/' target='blank'> Syncd-Up </Button>

        <p>This app allows friends to stay in sync while listening to playlists together. Skip a song, pause, play but continue to stay synced.</p>

      </Container>
    )
  }
}
