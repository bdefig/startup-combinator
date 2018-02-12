import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateStartup } from './Generator';

class App extends Component {
  handleAnother = () => {
    this.forceUpdate();
  }

  render() {
    const randomStartup = generateStartup();
    
    return (
      <div className='App'>
        <div className='App-titleWrapper'>
          <div className='App-title'>Startup Combinator</div>
        </div>
        <div className='App-theMagic'>
          {generateStartup()}
        </div>
        {/* <div className='App-rateWrapper'>
          <div className='App-rateThumb'>👎</div>
          <div className='App-rateThumb'>👍</div>
        </div> */}
        <div className='App-another' onClick={() => this.handleAnother()}>
          Another!
        </div>
      </div>
      
    );
  }
}

export default App;