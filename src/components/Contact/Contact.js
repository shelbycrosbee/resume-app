import React from 'react';

import Dropdown from "react-bootstrap/Dropdown"


class Contact extends React.Component{

render(){
  return(

    <Dropdown>
    <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Contact
     </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item  className="fas fa-phone-square" href="tel:+15413069775" target="_blank">(541)306-9775</Dropdown.Item>
        <Dropdown.Item  className="far fa-envelope" href="mailto:shelbycrosbee@gmail.com" target="_blank">shelbycrosbee@gmail.com
        </Dropdown.Item>
        <Dropdown.Item className="fab fa-github-square" href="https://github.com/shelbycrosbee">shelbycrosbee
        </Dropdown.Item>
        <Dropdown.Item  className="fab fa-linkedin" href="https://www.linkedin.com/in/shelby-miller-00754a182/"
            target="_blank">Shelby
            Miller</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    
  )
}


}
export default Contact