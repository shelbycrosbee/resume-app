import React from "react";
import '../index.css';
import { Col, Row, Container } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";


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
        <div><h1>Shelby Miller</h1></div>

        <div className='parallax'></div>
        <Row style={{ height: "0px" }}>
          <Col><Contact /></Col>
        </Row>
        <div className='parallax'></div>

        <div className="parallax"></div>
        <Row style={{ height: '0px' }}>
          <ResumeLink />
        </Row>
        <div className="parallax"></div>

        <div className="parallax"></div>
        <Row style={{ height:'0px' }}>
          <PortfolioLink />
        </Row>
        <div className="parallax"></div>

      </Container>
    )
  }
}
export default Layout