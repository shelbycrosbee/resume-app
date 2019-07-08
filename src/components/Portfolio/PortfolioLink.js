import React from 'react';
import {Button} from 'react-bootstrap'
import { withRouter, } from 'react-router-dom'

class PortfolioLink extends React.Component {

handlePortfolioLink(e){
  e.preventDefault();
  this.props.history.push('/portfolio')
}

  render() {
    return (
      <Button onClick = {e => this.handlePortfolioLink(e)} variant={'dark'}>Portfolio</Button>
    )
  }
}

export default withRouter(PortfolioLink)