import React from 'react';
import { withRouter, } from 'react-router-dom'

class PortfolioLink extends React.Component {

handlePortfolioLink(e){
  e.preventDefault();
  this.props.history.push('/portfolio');
  window.scrollTo(0,0)
}

  render() {
    return (
      <a onClick = {e => this.handlePortfolioLink(e)} className='link resHeader'>PORTFOLIO</a>
    )
  }
}

export default withRouter(PortfolioLink)