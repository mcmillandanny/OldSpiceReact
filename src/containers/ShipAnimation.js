import React, { Component } from 'react';
import { Expo, TimelineMax, TweenMax} from 'gsap/TweenMax';

class Ship extends Component {
    componentDidMount() {
        let masterTimeline = new TimelineMax({paused: true})
        
        const ship = new TimelineMax();
        masterTimeline.add(ship);

      ship.to('#ship', 1, {left: "-50%", opacity: .5})
      .to('#ship', .1, {left:"-400%", opacity: 1});
      
        // tweenMax.to(target,duration, {vars} stagger ammount):
      TweenMax.ticker.addEventListener("tick", function() {
        masterTimeline.progress((window.scrollY / document.documentElement.clientHeight));
    });
    //     x: '-100px',
    //   }).to('#ship-ani', 0.85, {
    //     x: '-100px',
    //     delay: 2.3,
    //     ease: Expo.easeIn
    //   });
    
    }
  
    render() {
      return (
        <div id="ship-ani">
            <img id="ship" src={require('../assets/images/old-spice-ship.jpg')} alt="ship"/>  
        </div>
          
      );
    }
  }
  
  
  export default Ship;