import React, { Component } from 'react';

import Home from './Home';
import Nav from './Nav';
import StreamList from './streams/StreamList';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <StreamList />
      </div>
    );
  }
}

export default App;
