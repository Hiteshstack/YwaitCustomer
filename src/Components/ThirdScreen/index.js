import React, { Component } from 'react';
import'./style.css';
import AppBar from '../AppBar/index.js';
import BackgroundBoxThree from '../BackgroundBoxThree/index.js';


class ThirdScreen extends Component {
  render() {
    return (
      <div>
      <AppBar/>
      <BackgroundBoxThree/>
      
      </div>
    );
  }
}

export default ThirdScreen;
