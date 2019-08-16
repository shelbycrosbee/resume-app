import React from 'react';
import './index.css'
import Dropdown from "react-bootstrap/Dropdown"
import CustomToggle from './CustomToggle'


class Contact extends React.Component{


  
render(){
  return(

    <Dropdown className='dropdownFont'>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
    <u>Contact</u>
     </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item  className="fas fa-phone" href="tel:+15413069775" target="_blank"> (541)306-9775</Dropdown.Item>
        <Dropdown.Item  className="far fa-envelope" href="mailto:shelbycrosbee@gmail.com" target="_blank"> shelbycrosbee@gmail.com
        </Dropdown.Item>
        <Dropdown.Item className="fab fa-github-square" href="https://github.com/shelbycrosbee"> shelbycrosbee
        </Dropdown.Item>
        <Dropdown.Item  className="fab fa-linkedin" href="https://www.linkedin.com/in/shelby-miller-00754a182/"
            target="_blank"> Shelby
            Miller</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    
  )
}


}
export default Contact