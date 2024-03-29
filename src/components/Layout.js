import React from "react";
import '../index.css';
import { Col, Row, Image } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import laugh from '../images/laugh.png'
import BioLink from "./Bio/BioLink";


class Layout extends React.Component {



  render() {

    return (
      <div>
        <div className='parallax'><div></div>
          <Row
            style={{ height: '200px', marginBottom: "1em" }}>
            <Col md >
              <Image src={laugh} className="headerImg" alt='header-pic' rounded />
            </Col>
            <Col><h1 className="nameFont">Shelby Miller</h1>
              <Contact className="justify" />
            </Col>
          </Row>



          <Row className="parallax"
            style={{ height: '180px' }}
          ></Row>
          <Row
            className="resumeImg resFont" fluid>
            <ResumeLink />
          </Row>


          <div className="parallax"
            style={{ height: '200px' }}
          ></div>
          <Row
            className="portfolioImg resFont">
            <PortfolioLink />
          </Row>

          <div className="parallax"
            style={{ height: '200px' }}
          ></div>
          <Row
            className="bioImg resFont">
              <BioLink />
          </Row>

          <div className="parallax"
            style={{ height: '20vh' }}
          ></div>

        </div>
      </div>
    )
  }
}
export default Layout