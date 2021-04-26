import React, { Component } from 'react';
import './App.css'
import Approuter from './config/router';

class App extends Component {
  render() {
    return (
      <div className='appMain'>
        <Approuter />
      </div>
    )
  }
}

export default App;