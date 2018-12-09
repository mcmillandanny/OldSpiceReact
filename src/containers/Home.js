import React from 'react';
import PropTypes from 'prop-types';
import { Panels } from './Panels';
import Slideshow from './Slider';


const Home = ({ data }) => 
<div>
  <div className='hero-content'>
    <h1>Home</h1>
      <div className="hero-wrapper">
        <Slideshow />
      </div>
      <Panels/>
  </div>
</div>

Home.propTypes = {
  data: PropTypes.array
};

export default Home;
