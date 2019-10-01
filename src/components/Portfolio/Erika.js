import React, { Component } from 'react'
import './index.css';
import erika from '../../images/Erika.png'
import { Image } from 'react-bootstrap'


export default class Erika extends Component {
  render() {
    return (
      <div className='portFont' style={{justifyContent:'center'}}>
      <Image src={erika} alt='erika pankow' fluid className='erika'/>
      <br/>

      <h5> <b>Erika Pankow Scholarship Foundatin </b></h5>

      <p>This is an undeployed recent project. This organization provides funding for people in the Gallatin Valley looking to further educate themselves in outdoor safety courses.</p>

    </div>
    )
  }
}
