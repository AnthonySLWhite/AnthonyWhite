// ----- Package Imports ----- //
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// ----- File Imports ----- //
import logo from './../img/Logo.svg';
import signiture from './../img/Signiture.svg';
// ----- End Imports ----- //

/*
TODO
- Summary: Add PT and ENG support
* Code needed: location.hostname === 'antoniobranco.eu' ? lang = 'PT' : lang = 'EN';
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" />
        <div className="signiture-quote">
          <img src={signiture} className="signiture" />
          <h3 className="quote">
            Intelligence without ambition is a bird without wings
            <br />- Salvador Dali
          </h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
