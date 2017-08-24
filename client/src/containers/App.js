import React, { Component } from 'react';

import Home from '../components/Home';
import Nav from '../components/Nav';
import StreamList from '../components/streams/StreamList';


import '../assets/styles/App.css';

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
