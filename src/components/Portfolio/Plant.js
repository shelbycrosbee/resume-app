import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import rPlant from '../../images/plant.jpg'
import '../../index.css'
import deer from '../../images/deer.JPG'
import terry from '../../images/terry.jpeg'

class Plant extends React.Component {

  render() {
    return (

      <Carousel className='mx-auto' style={{height: '800px', innerWidth: '100px'}}>
        <Carousel.Item>
          <Image
            className="d-block  mx-auto carousel"
            src={rPlant}
            alt="robert plant"
          />
          <br/>
          <Carousel.Caption>
            <h3>Drawing of Robert Plant</h3>
            <p>Charcoal 6ft by 4ft</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel"
            src={deer}
            alt="deer"
          />
          <Carousel.Caption>
            <h3>Painting of a Buck</h3>
            <p>Watercolor 4ft by 2.5ft</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto terry"
            src={terry}
            alt="terry"
          />
          <Carousel.Caption>
            <h3>Abstract</h3>
            <p>Oil 3ft by 2ft</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}
export default Plant