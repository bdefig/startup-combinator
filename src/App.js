import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let pluralize = require('pluralize');
let nouns = require('./Nouns');

const randomNoun = (words) => {
  return words[Math.floor(Math.random() * words.length)];
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {/* {pluralize('index')} */}
          {pluralize(randomNoun(nouns))}
        </p>
      </div>
    );
  }
}

export default App;
