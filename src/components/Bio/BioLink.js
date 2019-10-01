import React from 'react';
import { withRouter, } from 'react-router-dom'

class BioLink extends React.Component {

handleBioLink(e){
  e.preventDefault();
  this.props.history.push('/bio');
  window.scrollTo(0,0)
}

  render() {
    return (
      <a onClick = {e => this.handleBioLink(e)} className='link resHeader'>ABOUT ME</a>
    )
  }
}

export default withRouter(BioLink)