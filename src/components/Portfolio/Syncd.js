import React, { Component } from 'react'
import syncd from '../../images/syncd.gif'
import { Image, Button } from 'react-bootstrap'
import './index.css'

export default class Syncd extends Component {
 
  render() {
    return (
      <div className='portFont' style={{justifyContent:'center'}}>
        <Image src={syncd} alt='syncd-up' fluid className='syncdUp'/>
        <br/>
        <Button href='https://syncd-up.herokuapp.com/' target='blank'> Syncd-Up </Button>

        <p>This app allows friends to stay in sync while listening to playlists together. Skip a song, pause, play but stay synced.</p>
        
      </div>
    )
  }
}
