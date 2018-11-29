import React from 'react';
import { Wave } from 'react-animated-text'; 

  export const Wave1 = () => (
    <div >
      <Wave className="loaderText" text="Old Spice" effectDuration={4} effect="verticalFadeOut" effectChange={.3} effectDirection='down'
        iterations={1}/>
    </div>
  )
  
  export default Wave1;