import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateStartup } from './Generator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startupText: generateStartup(),
      thumbsDownAnimate: false,
      thumbsUpAnimate: false
    };
    this.handleThumbsDownClick = this.handleThumbsDownClick.bind(this);
    this.handleThumbsUpClick = this.handleThumbsUpClick.bind(this);
  }

  handleAnother = () => {
    this.setState({startupText: generateStartup()});
  }

  handleThumbsDownClick = () => {
    this.setState({thumbsDownAnimate: true});
    setTimeout(() => this.setState({thumbsDownAnimate: false}), 750);
  }

  handleThumbsUpClick = () => {
    this.setState({thumbsUpAnimate: true});
    setTimeout(() => this.setState({thumbsUpAnimate: false}), 750);
  }

  render() {
    let startupText = this.state.startupText;
    let thumbsDownClass = 'App-rateThumb ' + (this.state.thumbsDownAnimate ? 'App-animateThumb' : '');
    let thumbsUpClass = 'App-rateThumb ' + (this.state.thumbsUpAnimate ? 'App-animateThumb' : '');
    
    return (
      <div className='App'>
        <div className='App-titleWrapper'>
          <div className='App-title'>Startup Combinator</div>
        </div>
        <div className='App-theMagic'>
          {startupText}
        </div>
        <div className='App-rateWrapper'>
          <div className='App-rateThumbWrapper'>
            <div className={thumbsDownClass} onClick={() => this.handleThumbsDownClick()}>
              👎
            </div>
          </div>
          <div className='App-rateThumbWrapper'>
            <div className={thumbsUpClass} onClick={() => this.handleThumbsUpClick()}>
              👍
            </div>
          </div>
        </div>
        <div className='App-another' onClick={() => this.handleAnother()}>
          Another!
        </div>
      </div>
      
    );
  }
}

export default App;