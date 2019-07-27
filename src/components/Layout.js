import React from "react";
import '../index.css';
import { Col, Row, Container, Image } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import laugh from '../images/laugh.png'
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
      <div className='parallax'>
        <Row style={{ height: '100px' }}>
          <Col><Image src={logo} style={{ height: '100px' }} alt='logo' roundedCircle/></Col>

          <Col><Image src={laugh} style={{ height: '100px' }} alt='header-pic' rounded /></Col>
        </Row>

        <div className='parallax'></div>
        <Row
          style={{ height: "500px" }}
          className="contactImg justify-content-center">
          <Contact />
        </Row>
        <div className='parallax'></div>

        <div className="parallax"></div>
        <Row
          style={{ height: '300px' }}
          className="resumeImg justify-content-center">
          <ResumeLink />
        </Row>
        <div className="parallax"></div>

        <div className="parallax"></div>
        <Row
          style={{ height: '300px' }}
          className="portfolioImg justify-content-center">
          <PortfolioLink />
        </Row>
        <div className="parallax"></div>

      </div>
    )
  }
}
export default Layout