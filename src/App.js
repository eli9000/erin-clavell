import React, { Component } from 'react';

import Header from './components/Header.js';
import Main from './components/Main.js';
// import About from './components/About.js';
import Footer from './components/Footer.js';

// import './components/header-shrink.js';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main className="Main" />
        <Main className="About" />
        <Main className="Issues" />
        <Main className="Plan" />
        <Main className="Involve" />
        <Footer />
      </div>
    );
  }
}

export default App;
