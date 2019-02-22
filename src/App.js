import React, { Component } from 'react';
import './styles/main.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Home />
      </div>
    );
  }
}

export default App;
