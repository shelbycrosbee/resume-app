import React from "react";
import '../index.css';
import { Col, Row } from 'react-bootstrap'
import Contact from './Contact/Contact'
import ResumeLink from './Resume/ResumeLink'
import PortfolioLink from "./Portfolio/PortfolioLink";


class Layout extends React.Component {


  render() {

    return (
<Row>
  <Col><Contact/></Col>
  <Col><ResumeLink /></Col>
  <Col><PortfolioLink/></Col>
</Row>
  )
  }
}
export default Layout