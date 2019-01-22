// ----- Package Imports ----- //
import React, { Component } from 'react';
// ----- File Imports ----- //
import logo from '../../img/Logo.svg';
import signiture from '../../img/Signiture.svg';
// ----- End Imports ----- //

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="logo" href="./">
          <img src={logo} className="logoImg" />
        </a>
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
