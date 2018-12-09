import React from 'react';
import { Slide } from 'react-slideshow-image';


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
            <img src={require('../assets/images/hero-slider.jpg')} alt="slide1"/> 
        </div>
        <div className="each-slide">
            <a href="target_blank"><img src={require('../assets/images/hero-slider-2.jpg')} alt="slide2"/></a>
        </div>
        
        <div className="each-slide">
            <img src={require('../assets/images/hero-slider-3.jpg')} alt="slide3"/> 
        </div>
      </Slide>
    )
}

export default Slideshow;