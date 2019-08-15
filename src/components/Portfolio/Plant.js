import React from 'react';
import { Carousel } from 'react-bootstrap';
import rPlant from '../../images/plant.jpg'
import '../../index.css'

class Plant extends React.Component {

  render() {
    return (

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 artPortfolioSizing"
            src={rPlant}
            alt="robert plant"
          />
          <Carousel.Caption>
            <h3>Drawing of Robert Plant</h3>
            <p>Charcoal 6ft by 4ft</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>



    )
  }
}
export default Plant