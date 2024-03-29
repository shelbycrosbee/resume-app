import React from 'react';
import './index.css'
import Dropdown from "react-bootstrap/Dropdown"
import CustomToggle from './CustomToggle'
import { Container } from 'react-bootstrap';


class Contact extends React.Component{


  
render(){
  return(
<Container fluid>
    <Dropdown className='dropdownFont' flip='true'>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
    <u>Contact</u>
     </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item className='menuFont' href="tel:+15413069775" target="_blank"><span role="img" aria-label='phone'>📞 </span>(541)306-9775</Dropdown.Item>
        <Dropdown.Item className='menuFont' href="mailto:shelbycrosbee@gmail.com" target="_blank"><i  className="far fa-envelope" ></i> shelbycrosbee@gmail.com
        </Dropdown.Item>
        <Dropdown.Item className='menuFont' href="https://github.com/shelbycrosbee"><i className="fab fa-github-square"></i> shelbycrosbee
        </Dropdown.Item>
        <Dropdown.Item className='menuFont' href="https://www.linkedin.com/in/shelby-miller-00754a182/"
            target="_blank"><i  className="fab fa-linkedin" ></i> Shelby
            Miller</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
      </Container>
  )
}


}
export default Contact