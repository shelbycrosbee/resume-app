import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import rPlant from '../../images/plant.jpg'
import '../../index.css'
import deer from '../../images/deer.JPG'

class Plant extends React.Component {

  render() {
    return (

      <Carousel className='mx-auto' style={{height: '700px'}}>
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel"
            src={rPlant}
            alt="robert plant"
            fluid
          />
          <Carousel.Caption>
            <h3>Drawing of Robert Plant</h3>
            <p>Charcoal 6ft by 4ft</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
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
            className="d-block w-100 carousel"
            src={deer}
            alt="deer"
          />
          <Carousel.Caption>
            <h3>Painting of a Buck</h3>
            <p>Watercolor 4ft by 2.5ft</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}
export default Plant