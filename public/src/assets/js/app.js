// ----- Package Imports ----- //
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// ----- File Imports ----- //
import Header from './components/header';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/footer';
// ----- End Imports ----- //

/*
TODO
- Summary: Add PT and ENG support
* Code needed: location.hostname === 'antoniobranco.eu' ? lang = 'PT' : lang = 'EN';
*/
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="skills_about">
          <Skills />

          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
