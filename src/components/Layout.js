import React from "react";
import '../index.css';
import { Col, Row, Image } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";
import laugh from '../images/laugh.png'
import Bio from "./Bio/Bio";
import BioLink from "./Bio/BioLink";


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
          <Row 
          style={{ height: '200px' }}>
            <Col md >
              <Image src={laugh} className="headerImg" alt='header-pic' rounded/>
            </Col>
            <Col><h1 className="nameFont">Shelby Miller</h1>
              <Contact className="justify" />
            </Col>
          </Row>
         
        

          <div className="parallax" 
          style={{ height: '100px' }}
          ></div>
          <Row
            style={{ height: '300px' }}
            className="resumeImg justify-content-center" fluid>
            <ResumeLink />
          </Row>


          <div className="parallax"
          style={{ height: '120px' }}
          ></div>
          <Row
            style={{ height: '300px' }}
            className="portfolioImg justify-content-center">
            <PortfolioLink />
          </Row>

          <div className="parallax"
          style={{ height: '120px' }}
          ></div>
          <Row
            style={{ height: '300px' }}
            className="bioImg justify-content-center">
            <BioLink />
          </Row>

          <div className="parallax"
          style={{ height: '100vh' }}
          ></div>

        </div>
      </div>
    )
  }
}
export default Layout