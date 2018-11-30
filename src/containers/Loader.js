import React, { Component } from 'react';
import { Expo, TimelineMax } from 'gsap/TweenMax';
import { Wave1 } from './AnimateText';



class Home extends Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.2 });

    tl.from('#logo', 3, {
      y: '-100vh',
    }).to('#loader', 0.85, {
      y: '-100vh',
      delay: 2.3,
      display: 'none',
      opacity: 0,
      ease: Expo.easeIn
    });

    tl.play();
  }

  render() {
    return (
      <div id="loader" className="loader loaderText">
        <div id="logo">
        <Wave1/>
        </div>
        
      </div>
    );
  }
}


export default Home;
