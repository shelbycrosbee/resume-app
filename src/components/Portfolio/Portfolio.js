import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';
import Navbar from '../Navbar'
import Engine from '../../images/enginesilhouette.jpg'
import Star from '../../images/starjar.jpg'
import Plant from './Plant'



class Portfolio extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <h2 class='text-center'><u>Undergraduate Physics Projects</u></h2>
        <Row>
          <Col md>
            <StarInJar />
          </Col>
          <Col md>
            <Stirling />
          </Col>
        </Row>
        <Row style={{alignContent: "center"}}>
          <Col>
            <Image src={Star} className="portfolioSizing" alt="fusor pic" />
          </Col>
          <Col>
            <Image src={Engine}  className="portfolioSizing"
              alt="engine pic"/>
          </Col>
        </Row>
        <h2 class='text-center'><u>Art Portfolio</u></h2>
        <Row>
        <Plant />
        </Row>
      </div>
    )
  }
}
export default Portfolio;