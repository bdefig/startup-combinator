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
          <h1 className='App-title'>Startup Combinator</h1>
        </div>
        <div className='App-theMagic'>
          {randomThing(businessModels) + ' for ' + pluralize(randomThing(nouns)) + ' 💸'}
        </div>
        <div className='App-rateWrapper'>
          <div className='App-rateThumb'>👎</div>
          <div className='App-rateThumb'>👍</div>
        </div>
        <div className='App-another' onClick={() => this.handleAnother()}>
          Another!
        </div>
      </div>
      
    );
  }
}

export default App;

{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
  <p>
    {pluralize(randomNoun(nouns))}
  </p>
</div> */}