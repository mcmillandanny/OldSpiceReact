import React, { Component } from 'react';
import { Bounce, Expo, TimelineMax } from 'gsap/TweenMax';
import { Wave1 } from './AnimateText';



class Home extends Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.3 });

    tl.from('#logo', 2, {
      y: '-100vh',
      ease: Bounce.easeOut
    }).to('#loader', 0.85, {
      delay: .6,
      display: 'none',
      opacity: 0,
      ease: Expo.easeIn
    });

    tl.play();
  }

  render() {
    return (
      <div id="loader" className="loader loaderText">
        <Wave1 />
      </div>
    );
  }
}


export default Home;
