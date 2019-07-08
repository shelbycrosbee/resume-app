import React from 'react';
import { Container } from 'react-bootstrap'
import StarInJar from './StarInJar'
import Stirling from './Stirling';

class Portfolio extends React.Component {

  render() {
    return (
      <Container>
        <StarInJar />
        <Stirling />


      </Container>
    )
  }
}
export default Portfolio;