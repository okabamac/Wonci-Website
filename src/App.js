import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/main.scss';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      </div>
    );
  }
}

export default App;
