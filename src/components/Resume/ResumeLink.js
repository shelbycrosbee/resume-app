import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../index.css';
import './index.css'
class ResumeLink extends React.Component {

  handleResumeLink(e){
    e.preventDefault();
    this.props.history.push("/resume");
    window.scrollTo(0, 0)
  }


  render() {
    return (
 
      <b onClick={e => this.handleResumeLink(e)} className='resHeader' style={{color: "white"}}>RESUME</b>
      
    )
  }
}

export default withRouter(ResumeLink)