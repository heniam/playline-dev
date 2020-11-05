import React from 'react';

import './header.css';


function header(){
    return (
    
      <div className="App">
          <header className="App-header">
            <img src= {process.env.PUBLIC_URL + '/assets/logo/logo@3x.png'} className="App-logo" alt="logo" />
          </header>    
      </div>
      
    );

  }
  


export default header;
