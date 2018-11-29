import React from 'react';
import { Wave } from 'react-animated-text'; 

  export const Wave1 = () => (
    <div >
      <Wave className="loaderText" text="Old Spice" delay={1}  effectDuration={8} effectChange={10} effectDirection='down'
        iterations={1}/>
       
    </div>
  )
  
  export default Wave1;