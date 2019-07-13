import React from "react";
import '../index.css';
import { Row, Container } from 'react-bootstrap'
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
        <div className="headerImg justify-content-center" style={{ height: '100px' }}>
          <h1>Shelby Miller</h1>
        </div>

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