import React from 'react';
import { Container,  } from 'react-bootstrap'



class Education extends React.Component{

  render(){

    return(
      <Container>
      <h3><u>EDUCATION</u></h3>
      <h5><strong>Bachelor's of Arts in Physics</strong><br /><small>Lewis & Clark College</small><br /><small>Portland, OR</small><br /><small> 2011-2015</small>

      </h5>
      <ul>
        <li>Graduated summa cum laude with a 3.914 GPA</li>
        <li>Member of the Phi Beta Kappa Society</li>
        <li>Minor in Mathematics</li>
      </ul>
      <h5><strong>Montana Code School</strong><br />
        <small>Bozeman, MT </small><br /><small>2019</small></h5>
      <ul>
        <li>Learned basics of software development including:
          JavaScript, CSS, HTML, Bootstrap React, MySQL...
    </li>

      </ul>
      <h5><strong>EuroCentres</strong><br /><small>Lausanne, Switzerland</small><br /><small> 2010-2011</small></h5>
      <ul>
        <li>Certificate of Advanced verbal and written skills in French</li>
      </ul>
      </Container>
    )
  }
}
export default Education