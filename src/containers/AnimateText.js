import React from 'react';
import { Wave } from 'react-animated-text'; 

  export const Wave1 = () => (
    <div >
      <Wave className="loaderText" text="Old Spice" effectDuration={5} effect="verticalFadeOut" effectChange={0.1} effectDirection='down'
        iterations={1}/>
        <audio controls>
            <source src="/assets/audio/jingle.mp3" type="audio/mpeg"/>
        </audio>
    </div>
  )
  
  export default Wave1;