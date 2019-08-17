import React from 'react';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

class Skills extends React.Component {
  render() {
    return (
      <Row className='mx-auto'>

        <Col xs>
          <h3><u>GENERAL STRENGTHS</u></h3>
          <ListGroup>
            <ListGroup.Item>Conversationally fluent in Spanish and French</ListGroup.Item>
            <ListGroup.Item>Customer service</ListGroup.Item>
            <ListGroup.Item>Teamwork</ListGroup.Item>
            <ListGroup.Item>Leadership</ListGroup.Item>
            <ListGroup.Item>Highly organized</ListGroup.Item>
            <ListGroup.Item>Time management</ListGroup.Item>
            <ListGroup.Item>Reliability</ListGroup.Item>
            <ListGroup.Item>Self-motivated</ListGroup.Item>
            <ListGroup.Item>Written and oral communication</ListGroup.Item>
            <ListGroup.Item>A positive, go-getter attitude</ListGroup.Item>
            <ListGroup.Item>First Aid and CPR certified</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col xs>
          <h3><u>TECHNICAL SKILLS</u></h3>
          <ListGroup>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Github</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>HTML/CSS</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroupItem>Redux</ListGroupItem>
            <ListGroup.Item>MySQL</ListGroup.Item>
            <ListGroup.Item>Heroku</ListGroup.Item>
            <ListGroupItem>Adonis.js</ListGroupItem>
            <ListGroup.Item>Microsoft Office</ListGroup.Item>
            <ListGroup.Item>WordPress</ListGroup.Item>
            <ListGroup.Item>Google Drive</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    )
  }
}
export default Skills