import React from "react";
import '../index.css';
import { Col, Row, Container } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import laugh from '../images/laugh.JPG'
import logo from '../images/logo.png'


class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: null
    }
  }




  render() {

    return (
      <Container>
        <Row style={{ height: '100px' }}>
          <Col><img src={laugh} style={{ height: '100px'}}/></Col>
          <Col><img src={logo} style={{ height: '100px', alignContent:'flex-end'}}/></Col>
        </Row>
        
         
        

        <div className='parallax'></div>
        <Row style={{ height: "300px" }} className="contactImg justify-content-center">
          <Contact />
        </Row>
        <div className='parallax'></div>

        <div className="parallax"></div>
        <Row style={{ height: '300px' }} className="resumeImg justify-content-center">
          <ResumeLink />
        </Row>
        <div className="parallax"></div>

        <div className="parallax"></div>
        <Row style={{ height: '300px' }} className="portfolioImg justify-content-center">
          <PortfolioLink />
        </Row>
        <div className="parallax"></div>

      </Container>
    )
  }
}
export default Layout