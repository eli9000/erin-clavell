import React, { Component } from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
