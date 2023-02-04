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
      <b onClick = {e => this.handlePortfolioLink(e)} className='link resHeader' style={{color: "white"}}>PORTFOLIO</b>
    )
  }
}

export default withRouter(PortfolioLink)