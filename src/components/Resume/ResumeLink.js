import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../../index.css';
class ResumeLink extends React.Component {

  handleResumeLink(e){
    e.preventDefault();
    this.props.history.push("/resume")
  }

  render() {
    return (
 
      <Button onClick={e => this.handleResumeLink(e)} variant={"dark"}>Resume</Button>
      
      
    )
  }
}

export default withRouter(ResumeLink)