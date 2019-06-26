import React, { Component } from 'react';
import'./style.css';
import AppBar from '../AppBar/index.js';
import BackgroundBox from '../BackgroundBox/index.js';


class FirstScreen extends Component {
  render() {
    return (
      <div>
      <AppBar/>
      <BackgroundBox/>
      
      </div>
    );
  }
}

export default FirstScreen;
