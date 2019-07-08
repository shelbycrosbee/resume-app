import React from "react";
import '../index.css';
import { Col, Row } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import river from '../images/owyhee.jpg'
import ski from '../images/ski.jpg'


const pictures = {
  river,
  ski
}
class Layout extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    pictures: null
  }
  }
  

  render() {

    return (
<Row>
  <Col><Contact/></Col>
  <Col><ResumeLink /></Col>
  <Col><PortfolioLink/></Col>
</Row>
  )
  }
}
export default Layout