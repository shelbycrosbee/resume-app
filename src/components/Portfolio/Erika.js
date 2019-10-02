import React, { Component } from 'react'
import './index.css';
import erika from '../../images/Erika.png'
import { Image, Container, Button } from 'react-bootstrap'


export default class Erika extends Component {
  render() {
    return (
      <Container className='portFont' style={{textAlign:'center', justifyContent: 'center'}}>
      <Image src={erika} alt='erika pankow'  className='erika'/>
      <br/>

      <Button href="https://github.com/shelbycrosbee/erika-pankow" target='blank'  style={{textAlign:'center', fontSize: '12px'}}>Erika Pankow Scholarship Foundatin </Button>

      <p>This is an undeployed recent project. This organization provides funding for people in the Gallatin Valley looking to further educate themselves in outdoor safety courses.</p>

    </Container>
    )
  }
}
