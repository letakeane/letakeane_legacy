import React, { Component } from 'react';
import { Aside } from './Aside';
import { Body } from './Body';
import './assets/stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Aside />
        <Body />
      </div>
    );
  }
}

export default App;
