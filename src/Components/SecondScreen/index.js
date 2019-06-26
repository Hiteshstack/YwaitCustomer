import React, { Component } from 'react';
import'./style.css';
import AppBar from '../AppBar/index.js';
import BackgroundBoxTwo from '../BackgroundBoxTwo/index.js';


class SecondScreen extends Component {
  render() {
    return (
      <div>
      <AppBar/>
      <BackgroundBoxTwo/>
      
      </div>
    );
  }
}

export default SecondScreen;
