import React, {Component } from 'react';

import './App.css';


class App extends Component {
  render(){
    return (
    
      <div className="App">
        
        <div> 
          <header className="App-header">
            <img src= {process.env.PUBLIC_URL + '/assets/logo/logo@3x.png'} className="App-logo" alt="logo" />
          </header>
        </div>
  
        
        
        <div class="container">
          <div class="row">
              <div class="col-sm">
                  One of three columns
              </div>
              <div class="col-sm">
                  One of three columns
              </div>
            </div>
        </div>
          
        
        
        
  
      
  
  
          <div>
            <footer className="App-footer"> 
            <div> <a href="https://www.playline.com/about/">About</a></div>
            <div><a href="https://www.playline.com/about/">PLB Bonus</a></div>
            <div><a href="https://www.playline.com/contact-us/">Contact</a></div>
            <div><a href="https://www.playline.com/security/">Security</a></div>
            <div><a href="https://www.playline.com/responsible-play/">Responsible Play</a></div>
            <div><a href="https://www.playline.com/privacy-policy-2/">Privacy</a></div>
            <div><a href="https://www.playline.com/terms-of-use/">Terms</a></div>
            </footer>
          </div>
        
        
        
      </div>
      
    );

  }
  
}

export default App;
