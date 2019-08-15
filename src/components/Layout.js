import React from "react";
import '../index.css';
import { Col, Row, } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import laugh from '../images/laugh.png'


class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: null
    }
  }


  render() {

    return (
      <div>
        <div className='parallax'><div></div>
          <Row style={{ height: "300px" }}>
            <Col className='headerImg' src={laugh} alt='header-pic' rounded ></Col>
            <Col><h1 className="nameFont">Shelby Miller</h1>
              <Contact className="justify" />
            </Col>
          </Row>



          <div className="parallax" 
          style={{ height: '180px' }}
          ></div>
          <Row
            style={{ height: '300px' }}
            className="resumeImg justify-content-center">
            <ResumeLink />
          </Row>


          <div className="parallax"
          style={{ height: '280px' }}
          ></div>
          <Row
            style={{ height: '300px' }}
            className="portfolioImg justify-content-center">
            <PortfolioLink />
          </Row>

          <div className="parallax"
          style={{ height: '180px' }}
          ></div>

        </div>
      </div>
    )
  }
}
export default Layout