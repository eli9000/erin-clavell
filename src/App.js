import React, { Component } from 'react';

// Main Component Imports:
import Header from './components/Header.js';
// import Main from './components/Main.js';
// import About from './components/About.js';
// import Issues from './components/Issues.js';
// import Involve from './components/Involve.js';
import Footer from './components/Footer.js';

// Component Libs Imports:
// import Content from './components/lib/Content.js';
// import Image from './components/lib/Image.js';
// import RenderList from './components/lib/RenderList.js';

// DATA Imports
// import VOWS from './data/vowsdata.js';
// import ABOUT from './data/aboutdata.js';
// import ISSUES from './data/issuesdata.js';

// CSS Imports:
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
