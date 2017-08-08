import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import Components
// Main Component Imports:
import App from './App.js';
// import Header from './components/Header.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Issues from './components/Issues.js';
import Involve from './components/Involve.js';
// import Footer from './components/Footer.js';

// Component Libs Imports:
// import Content from './components/lib/Content.js';
// import Image from './components/lib/Image.js';
// import RenderList from './components/lib/RenderList.js';

const routes = (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/issues" component={Issues} />
      <Route path="/involve" component={Involve} />
    </App>
  </BrowserRouter>
);

export default routes;