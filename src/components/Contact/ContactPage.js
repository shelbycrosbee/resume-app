import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../index.css'

class ContactPage extends React.Component {

  render() {

    return (
      <div><h1 className='justify-content-center'>Contact</h1>
      <Carousel >
         
        <Carousel.Item>
        <h1 className="fas fa-phone-square" >
        (541)306-9775</h1> 
          
        </Carousel.Item>
        <Carousel.Item>
        <h1 className="far fa-envelope">shelbycrosbee@gmail.com</h1>
        </Carousel.Item>
        <Carousel.Item>
        <h1  className="fab fa-github-square" >
        shelbycrosbee
        </h1>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="fab fa-linkedin"
         >Shelby
          Miller</h1>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }
}
export default ContactPage