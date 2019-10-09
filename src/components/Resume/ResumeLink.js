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
 
      <a onClick={e => this.handleResumeLink(e)} className='resHeader' style={{color: "white", hover: "black"}}>RESUME</a>
      
    )
  }
}

export default withRouter(ResumeLink)