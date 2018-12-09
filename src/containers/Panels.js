import React from 'react';


  export const Panels = () => (
    <div>
      <div className="column-wrapper">
          <div className="col-1">
          <img className="panel-image-1"src={require('../assets/images/panel-image-1.jpeg')} alt="col1"/> 
            <div className="frame">
              <img src={require('../assets/images/frame.png')} alt="frame"/>  
            </div>
          </div>
        <div className="col-2">
             <img className="panel-image-2"src={require('../assets/images/panel-image-2.jpeg')} alt="col2"/> 
          <div className="frame">
              <img src={require('../assets/images/frame.png')} alt="frame"/>  
            </div>
        </div>
        <div className="col-3">
            <img className="panel-image-3"src={require('../assets/images/panel-image-3.jpeg')} alt="col3"/> 
          <div className="frame">
              <img src={require('../assets/images/frame.png')} alt="frame"/>  
          </div>
        </div>
      </div>
    </div>
  )
  
  export default Panels;