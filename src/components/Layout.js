import React from "react";
import '../index.css';
import { Col, Row } from 'react-bootstrap'
import Contact from './Contact'


class Layout extends React.Component {


  render() {

    return (
<Row>
  <Col><Contact/></Col>
  <Col>Resume</Col>
  <Col>Portfolio</Col>
</Row>
  )
  }
}
export default Layout