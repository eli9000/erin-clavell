import React, { Component } from 'react';

// Main Component Imports:
import Header from './components/Header.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Issues from './components/Issues.js';
import Involve from './components/Involve.js';
import Footer from './components/Footer.js';

// Component Libs Imports:
import Content from './components/lib/Content.js';
import Image from './components/lib/Image.js';

// CSS Imports:
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Main className="Main">
          <Content className="Main-Content" title="Welcome">
            Text Here?
          </Content>
        </Main>

        <About className="About">
          <Content className="About-Content" title="About Me">

          </Content>
          <Image className="About-Image" src="/images/ec-about.jpg" height="auto" width="60%" />
        </About>

        <Issues className="Issues">
          <Content className="Issues-Content" title="On the Issues">

          </Content>
          <Image className="Issues-Image" src="/images/ec-transparent.png" />
        </Issues>

        <Involve className="Involve">
          <Content className="Involve-Content" title="Get Involved">

          </Content>
        </Involve>

        <Footer />
      </div>
    );
  }
}

export default App;
