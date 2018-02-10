import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let pluralize = require('pluralize');
let nouns = require('./Nouns');
let businessModels = require('./BusinessModels');

class App extends Component {
  handleAnother = () => {
    this.forceUpdate();
  }

  render() {
    const randomThing = (things) => {
      return things[Math.floor(Math.random() * things.length)];
    }
    
    return (
      <div className='App'>
        <div className='App-titleWrapper'>
          <div className='App-title'>Startup Combinator</div>
        </div>
        <div className='App-theMagic'>
          {randomThing(businessModels) + ' for ' + pluralize(randomThing(nouns)) + ' 💸'}
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