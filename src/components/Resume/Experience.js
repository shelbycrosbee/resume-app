import React from 'react';
import { Col, Row, Container } from 'react-bootstrap'

class Experience extends React.Component {

  render() {
    return (
      <Container>
      <Row className={'justify-content-center'}>
        <h3><u>PROFESSIONAL EXPERIENCE</u></h3>

      </Row>

      <Row>
        <Col sm><strong>Lone Mountain Sports</strong>-Big Sky,
          MT<br /><small>November 2017-April 2019</small> </Col>

        <p>Ski Shop Technician/ Rental Sales Associate</p>
        <ul>
          <li>
            Cultivated an ablility to handle the pressure of customer needs for fast service and quick turnaround in a
            highly trafficked, vacation based business. Succeeded in tailoring to a customer's specific preferences
            while renting, maintaining and repairing ski and snowboard equipment.
            </li>
        </ul>


        <Col sm><strong>Montana Whitewater</strong>-Gallatin Gateway,
          MT<br /><small>May 2016-August 2018</small> </Col>

        <p>Raft Guide</p>
        <ul>
          <li>Provided excellent customer service and demonstrated professionalism and leadership capabilities while
            guiding guests on paddle rafts for one and two days trips on the Gallatin River.</li>
        </ul>

      </Row>
      <Row>
        <Col sm><strong>Miller Lumber Company</strong>-Bend,
          OR<br /><small>September 2018-October 2018</small></Col>

        <p>Inside Sales</p>
        <ul>
          <li>
            Developed relationships with, and facilitated sales, between contractors and manufacturers for building
            materials. Utilized resources and customer service skills to meet the rapid and urgent customer needs of the
            building industry.
          </li>
        </ul>


        <Col sm><strong>Lewis & Clark College</strong>-Portland, OR <br />
          <small>2012-2015</small></Col>

        <p>Tutor</p>
        <ul>
          <li>
            Learned varied teaching techniques as a tutor in physics, mathematics, Spanish and French to college
            students at the college’s Symbolic and Quantitative Resource Center and through the Student Academic Affairs
            Board.
          </li>
        </ul>


        <Col sm><strong>College Outdoors</strong>-Portland, OR
        <br /><small>2012-2015</small></Col>

        <p>Raft Guide/Outdoor Educator and Warehouse Staff</p>
        <ul>
          <li>
            Gained leadership experience and group management skills as a guide and educator. Guided students on
            multi-day rafting, surfing and yoga trips, teaching participants skills in raft guiding, outdoor
            survival/safety, teamwork and communication.
          </li>
        </ul>

        <Col sm><strong>West Bend Property Company</strong>-Bend, OR
        <br /><small>2012-2014</small></Col>

        <p>Front Desk/ Reception</p>
        <ul>
          <li>
            Practiced organizational and mediation skills as the front desk and office assistant for a property
            management firm. Learned many general office skills as well as WordPress.
          </li>
        </ul>
      </Row>
      </Container>
    )
  }
}
export default Experience